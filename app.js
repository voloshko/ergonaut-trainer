(function() {
    'use strict';

    const state = {
        currentCategory: '2key',
        currentText: '',
        words: [],
        wordIndex: 0,
        charIndex: 0,
        correctChars: 0,
        totalKeystrokes: 0,
        startTime: null,
        timerInterval: null,
        isFinished: false
    };

    function init() {
        const el = {
            hiddenInput: document.getElementById('hiddenInput'),
            textDisplay: document.getElementById('textDisplay'),
            statsWpm: document.getElementById('statsWpm'),
            statsAccuracy: document.getElementById('statsAccuracy'),
            statsTime: document.getElementById('statsTime'),
            resultsOverlay: document.getElementById('resultsOverlay'),
            resultsWpm: document.getElementById('resultsWpm'),
            resultsAccuracy: document.getElementById('resultsAccuracy'),
            resultsTime: document.getElementById('resultsTime'),
            nextButton: document.getElementById('nextButton'),
            restartButton: document.getElementById('restartButton'),
            comboToggleButton: document.getElementById('comboToggleButton'),
            comboPanel: document.getElementById('comboPanel'),
            comboTable: document.getElementById('comboTable')
        };

        el.hiddenInput.addEventListener('keydown', function(e) {
            if (state.isFinished) return;

            if (e.key === 'Backspace') {
                e.preventDefault();
                handleBackspace();
            } else if (e.key === ' ') {
                e.preventDefault();
                handleSpace();
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                handleChar(e.key);
            }
        });

        el.textDisplay.addEventListener('click', function() { el.hiddenInput.focus(); });
        document.addEventListener('click', function() { el.hiddenInput.focus(); });

        document.querySelectorAll('.categoryTab').forEach(function(tab) {
            tab.addEventListener('click', function() { switchCategory(tab.dataset.category); });
        });

        el.nextButton.addEventListener('click', function() {
            el.resultsOverlay.classList.add('hidden');
            loadNewText();
        });

        el.restartButton.addEventListener('click', function() {
            el.resultsOverlay.classList.add('hidden');
            restartText();
        });

        el.comboToggleButton.addEventListener('click', function() {
            el.comboPanel.classList.toggle('hidden');
        });

        populateComboTable(el.comboTable);
        loadNewText();
        el.hiddenInput.focus();

        // Expose for inline handlers if needed
        window._trainer = { el: el };
    }

    function populateComboTable(table) {
        var tbody = table.querySelector('tbody');
        tbody.innerHTML = '';
        var sorted = Object.entries(COMBOS).sort(function(a, b) { return a[0].localeCompare(b[0]); });
        sorted.forEach(function(entry) {
            var word = entry[0], combo = entry[1];
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + word + '</td><td class="combo-hint-type-' + combo.type + '">' + combo.keys + '</td><td>' + combo.type + '-key</td>';
            tbody.appendChild(row);
        });
    }

    function switchCategory(category) {
        if (state.currentCategory === category) return;
        state.currentCategory = category;
        document.querySelectorAll('.categoryTab').forEach(function(tab) {
            tab.classList.toggle('active', tab.dataset.category === category);
        });
        loadNewText();
    }

    function loadNewText() {
        var cat = TEXTS[state.currentCategory];
        var texts = cat.texts || cat;
        var idx = Math.floor(Math.random() * texts.length);
        state.currentText = texts[idx];
        state.words = state.currentText.split(' ');
        resetState();
        renderText();
        window._trainer.el.hiddenInput.focus();
    }

    function restartText() {
        resetState();
        renderText();
        window._trainer.el.hiddenInput.focus();
    }

    function resetState() {
        state.wordIndex = 0;
        state.charIndex = 0;
        state.correctChars = 0;
        state.totalKeystrokes = 0;
        state.startTime = null;
        state.isFinished = false;
        if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
        updateStatsUI(0, 100, 0);
    }

    function renderText() {
        var display = window._trainer.el.textDisplay;
        display.innerHTML = '';
        display.scrollTop = 0;

        state.words.forEach(function(word, wordIdx) {
            var wrapper = document.createElement('div');
            wrapper.className = 'wordWrapper';
            wrapper.dataset.wordIndex = wordIdx;

            var wordDiv = document.createElement('div');
            wordDiv.className = 'word';

            for (var i = 0; i < word.length; i++) {
                var span = document.createElement('span');
                span.className = 'char';
                span.textContent = word[i];
                span.dataset.wi = wordIdx;
                span.dataset.ci = i;
                wordDiv.appendChild(span);
            }
            wrapper.appendChild(wordDiv);

            // Combo hint
            var combo = COMBOS[word.toLowerCase().replace(/[^a-z]/g, '')];
            if (combo) {
                var hint = document.createElement('div');
                hint.className = 'comboHint combo-hint-type-' + combo.type;
                hint.textContent = combo.keys;
                wrapper.appendChild(hint);
            }

            display.appendChild(wrapper);
        });

        highlightActiveWord();
    }

    function highlightActiveWord() {
        document.querySelectorAll('.wordWrapper').forEach(function(w) { w.classList.remove('active'); });
        var active = document.querySelector('.wordWrapper[data-word-index="' + state.wordIndex + '"]');
        if (active) {
            active.classList.add('active');
            scrollIfNeeded(active);
        }
    }

    function scrollIfNeeded(activeWord) {
        var container = window._trainer.el.textDisplay;
        var cRect = container.getBoundingClientRect();
        var wRect = activeWord.getBoundingClientRect();
        if (wRect.top > cRect.top + cRect.height * 0.55) {
            container.scrollTop += wRect.top - cRect.top - cRect.height * 0.35;
        }
    }

    function handleChar(ch) {
        if (!state.startTime) startTimer();

        var word = state.words[state.wordIndex];
        if (state.charIndex >= word.length) return; // word complete, need space

        state.totalKeystrokes++;
        var expected = word[state.charIndex];
        var correct = ch === expected;
        if (correct) state.correctChars++;

        setCharClass(state.wordIndex, state.charIndex, correct ? 'correct' : 'incorrect');
        state.charIndex++;

        updateLiveStats();
    }

    function handleSpace() {
        var word = state.words[state.wordIndex];
        // Only advance if word is fully typed
        if (state.charIndex < word.length) {
            // Mark remaining chars as incorrect
            for (var i = state.charIndex; i < word.length; i++) {
                state.totalKeystrokes++;
                setCharClass(state.wordIndex, i, 'incorrect');
            }
        }

        if (state.wordIndex < state.words.length - 1) {
            state.wordIndex++;
            state.charIndex = 0;
            highlightActiveWord();
            updateLiveStats();
        } else {
            finishText();
        }
    }

    function handleBackspace() {
        if (state.charIndex > 0) {
            state.charIndex--;
            setCharClass(state.wordIndex, state.charIndex, '');
        }
    }

    function setCharClass(wi, ci, cls) {
        var span = document.querySelector('.char[data-wi="' + wi + '"][data-ci="' + ci + '"]');
        if (span) {
            span.classList.remove('correct', 'incorrect');
            if (cls) span.classList.add(cls);
        }
    }

    function startTimer() {
        state.startTime = Date.now();
        state.timerInterval = setInterval(function() {
            var elapsed = Math.round((Date.now() - state.startTime) / 1000);
            var m = Math.floor(elapsed / 60);
            var s = elapsed % 60;
            window._trainer.el.statsTime.textContent = m + ':' + (s < 10 ? '0' : '') + s;
            updateLiveStats();
        }, 200);
    }

    function updateLiveStats() {
        if (!state.startTime) return;
        var elapsed = (Date.now() - state.startTime) / 1000 / 60;
        if (elapsed < 0.01) return;
        var wpm = Math.round((state.correctChars / 5) / elapsed);
        var acc = state.totalKeystrokes > 0 ? Math.round((state.correctChars / state.totalKeystrokes) * 100) : 100;
        window._trainer.el.statsWpm.textContent = wpm;
        window._trainer.el.statsAccuracy.textContent = acc + '%';
    }

    function updateStatsUI(wpm, acc, timeSec) {
        window._trainer.el.statsWpm.textContent = wpm;
        window._trainer.el.statsAccuracy.textContent = acc + '%';
        var m = Math.floor(timeSec / 60);
        var s = timeSec % 60;
        window._trainer.el.statsTime.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }

    function finishText() {
        state.isFinished = true;
        if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }

        var elapsed = (Date.now() - state.startTime) / 1000;
        var minutes = elapsed / 60;
        var wpm = Math.round((state.correctChars / 5) / minutes) || 0;
        var acc = state.totalKeystrokes > 0 ? Math.round((state.correctChars / state.totalKeystrokes) * 100) : 100;
        var timeRound = Math.round(elapsed);

        window._trainer.el.resultsWpm.textContent = wpm;
        window._trainer.el.resultsAccuracy.textContent = acc + '%';
        var rm = Math.floor(timeRound / 60);
        var rs = timeRound % 60;
        window._trainer.el.resultsTime.textContent = rm + ':' + (rs < 10 ? '0' : '') + rs;
        window._trainer.el.resultsOverlay.classList.remove('hidden');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
