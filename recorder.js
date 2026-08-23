(function() {
    'use strict';

    // Joint keystroke + EMG recording for neural-band REQ-002 / SPEC-011.
    //
    // This file only reports. It never states the clock offset: it measures raw
    // exchange triples against the local recorder and lets the recorder compute
    // the offset, so the timing of a label is a measured quantity with an error
    // bar instead of an assumption. Keys are read from the exercise input only,
    // so nothing typed elsewhere on the page can reach the recorder.

    var ENDPOINT = 'http://127.0.0.1:8787';
    var SYNC_ROUNDS = 25;
    var FLUSH_MS = 200;

    var recorder = {
        sync: null,
        active: false,
        queue: [],
        sent: 0,
        flushTimer: null,
        corpus: null
    };

    function nowNs() {
        return Math.round(performance.now() * 1e6);
    }

    function post(path, body) {
        return fetch(ENDPOINT + path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body || {})
        }).then(function(response) {
            return response.json().then(function(payload) {
                if (!response.ok) throw new Error(payload.error || ('HTTP ' + response.status));
                return payload;
            });
        });
    }

    function sha256Hex(text) {
        if (!window.crypto || !window.crypto.subtle) {
            return Promise.reject(new Error('crypto.subtle unavailable: cannot bind the corpus'));
        }
        return window.crypto.subtle
            .digest('SHA-256', new TextEncoder().encode(text))
            .then(function(buffer) {
                return Array.prototype.map
                    .call(new Uint8Array(buffer), function(byte) {
                        return ('0' + byte.toString(16)).slice(-2);
                    })
                    .join('');
            });
    }

    function measureOffset() {
        var samples = [];
        function round(index) {
            if (index >= SYNC_ROUNDS) return post('/sync', { samples: samples });
            var first = nowNs();
            return post('/clock', {}).then(function(payload) {
                samples.push({
                    t1_browser_ns: first,
                    server_ns: payload.server_ns,
                    t2_browser_ns: nowNs()
                });
                return round(index + 1);
            });
        }
        return round(0);
    }

    function flush() {
        if (!recorder.queue.length) return Promise.resolve();
        var batch = recorder.queue;
        recorder.queue = [];
        return post('/events', { events: batch })
            .then(function(payload) {
                recorder.sent += payload.accepted;
                render();
            })
            .catch(function(error) {
                // Never silently lose events: put them back and surface the reason.
                recorder.queue = batch.concat(recorder.queue);
                status('event flush failed: ' + error.message, 'bad');
            });
    }

    function expectedChar() {
        var state = window._trainer && window._trainer.state;
        if (!state || !state.words) return null;
        var word = state.words[state.wordIndex];
        if (word === undefined) return null;
        if (state.charIndex >= word.length) return ' ';
        return word[state.charIndex];
    }

    function record(event, type) {
        if (!recorder.active) return;
        var expected = expectedChar();
        recorder.queue.push({
            type: type,
            code: event.code,
            key: event.key,
            repeat: event.repeat === true,
            browser_ns: nowNs(),
            expected: expected,
            correct: type === 'keydown' ? event.key === expected : null,
            word_index: window._trainer.state.wordIndex,
            char_index: window._trainer.state.charIndex
        });
    }

    function attach() {
        var input = window._trainer.el.hiddenInput;
        // Capture phase: read the exercise position before the trainer advances it.
        input.addEventListener('keydown', function(e) { record(e, 'keydown'); }, true);
        input.addEventListener('keyup', function(e) { record(e, 'keyup'); }, true);
    }

    var ui = {};

    function status(text, kind) {
        ui.status.textContent = text;
        ui.status.className = 'recStatus' + (kind ? ' recStatus-' + kind : '');
    }

    function render() {
        ui.count.textContent = recorder.sent + ' events sent, ' + recorder.queue.length + ' queued';
    }

    function start() {
        var state = window._trainer.state;
        if (!state.currentText) {
            status('no exercise text loaded', 'bad');
            return;
        }
        ui.button.disabled = true;
        status('measuring clock offset...');
        sha256Hex(state.currentText)
            .then(function(hex) {
                recorder.corpus = { id: ui.corpusId.value.trim(), sha256: hex };
                return measureOffset();
            })
            .then(function(sync) {
                recorder.sync = sync;
                status(
                    'offset ' + (sync.offset_ns / 1e6).toFixed(3) + ' ms, uncertainty ' +
                        (sync.uncertainty_ns / 1e6).toFixed(3) + ' ms'
                );
                return post('/exercise/start', {
                    corpus_id: recorder.corpus.id,
                    corpus_sha256: recorder.corpus.sha256
                });
            })
            .then(function() {
                recorder.active = true;
                recorder.flushTimer = setInterval(flush, FLUSH_MS);
                ui.button.textContent = 'Stop recording';
                ui.button.disabled = false;
                status('recording — type the exercise', 'good');
                window._trainer.el.hiddenInput.focus();
            })
            .catch(function(error) {
                ui.button.disabled = false;
                status(error.message, 'bad');
            });
    }

    function stop() {
        recorder.active = false;
        clearInterval(recorder.flushTimer);
        ui.button.disabled = true;
        flush()
            .then(function() { return post('/exercise/stop', {}); })
            .then(function(snapshot) {
                status(
                    'stopped: ' + snapshot.events + ' events (' + snapshot.keydown_events +
                        ' down / ' + snapshot.keyup_events + ' up)',
                    'good'
                );
            })
            .catch(function(error) { status(error.message, 'bad'); })
            .then(function() {
                ui.button.textContent = 'Start recording';
                ui.button.disabled = false;
            });
    }

    function buildPanel() {
        var panel = document.createElement('div');
        panel.className = 'recorderPanel';
        panel.innerHTML =
            '<div class="recTitle">EMG session recorder</div>' +
            '<div class="recRow"><label for="recCorpusId">corpus id</label>' +
            '<input id="recCorpusId" class="recInput" type="text" spellcheck="false"></div>' +
            '<button id="recButton" class="recButton">Start recording</button>' +
            '<div id="recStatus" class="recStatus">idle</div>' +
            '<div id="recCount" class="recCount">0 events sent, 0 queued</div>' +
            '<div class="recNote">Keys are read from the exercise field only. ' +
            'Start the local recorder first; it owns the armband capture.</div>';
        document.body.appendChild(panel);
        ui.button = panel.querySelector('#recButton');
        ui.status = panel.querySelector('#recStatus');
        ui.count = panel.querySelector('#recCount');
        ui.corpusId = panel.querySelector('#recCorpusId');
        ui.corpusId.value = window._trainer.corpusId || '';
        ui.button.addEventListener('click', function() {
            if (recorder.active) stop();
            else start();
        });
    }

    function init() {
        if (!window._trainer || !window._trainer.state) return;
        buildPanel();
        attach();
        window._recorder = recorder;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
