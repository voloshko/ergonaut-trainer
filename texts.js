const TEXTS = {
    "2key": {
        name: "2-Key",
        texts: [
            "the people would know that some good time was very near and they could also think about what was really important before the world was even found",
            "you should not think about what your work would be like when you can just make some very good time for her and his people who are with you",
            "when they are very good people who know that some time was also been found under his way which was really more than what they need",
            "the only way people could work with your time was that they should never even think about what was really good for her and his world",
            "before they know it some people will come from under the great world and make his way into the time which was been really good",
            "even when you think about what his people need you should also know that the very best work was been found with some great time",
            "she said that her family would want to give his friend some time before they must call the school and tell her what was really going on",
            "many people believe that the best way to start a business is to find a good market and show the public what your company can do for them",
            "the teacher said that every student must learn how to read and write well because education is very important for both work and life",
            "he could hear the sound of water left in the early morning and feel the high change that nature would give to people who look for truth",
            "the government said they would support research into water quality because public health is a general problem that effects many people in the city",
            "her daughter was doing very well in school and she said she want to study history because she believe that we can learn from the past",
            "the report said that industry management need to develop a new process for product quality and security because the economy was not very good this week",
            "you must turn left and go down the road about three hundred meters past the field until you find the place where the hand water force is",
            "the media report said that the company price was much less than what people think because the side effect of the policy was not very clear",
            "some people think that a relationship should be based on truth and value while others believe that material evidence is more important than theory",
            "the next question was about how parents should teach their children about nature and the activity of family life in a social situation",
            "both students said the method was very possible but they need more time to research the system before they can give a decision",
            "the article said that the level of support for education in this part of the country was very high and the practice was really working well",
            "his view was that the case for change in the way business is done would be found in the evidence from industry research over the next week"
        ]
    },
    "3key": {
        name: "3-Key",
        texts: [
            "there through those three things together another world where something already always been between their different important thoughts",
            "whether around every little point the first world still being here right into their story since well actually using each small thing",
            "keep the same long help take every little first world through right into where those three important things together already always",
            "another thing though between here and there whether something different still around every world since well actually using their story",
            "write about the first important thing since every little world already there together through those three right where being here",
            "whether their story long or small take each point into account and help keep the same thing right first through well actually",
            "the first thing through three different worlds where every little story still being told since those three here together always around",
            "keep each small point right here where well actually using their help into the same world whether there through long being first",
            "another important thing already between those three worlds since every little right here take what thing together always being around",
            "whether something different still through their first story since well actually here where every world help keep the same small thing"
        ]
    },
    "ml": {
        name: "ML/AI",
        texts: [
            "the neural network uses gradient descent with backprop to optimize the model parameters during training while the dropout layer prevents overfitting on the dataset",
            "latent diffusion models have become very popular for image generation because they work in a compressed latent space which makes the training process more efficient",
            "during inference the softmax function converts each logit into probabilities and the checkpoint system allows you to resume training from where you left off after each epoch",
            "the transformer architecture processes the language input using self attention while the convolutional layer extracts local features from the embedding space",
            "the mamba architecture offers an alternative to transformer models with linear scaling while maintaining competitive performance on language tasks through selective state spaces",
            "the diffusion model creates images by adding noise to the dataset and then learning to reverse the process while the embedding captures semantic meaning of tokens",
            "each training epoch updates the model weights using gradient information from backprop while the activation function determines how neurons respond to their inputs",
            "the residual connection helps the neural network learn better by allowing gradients to flow through the architecture during training without the softmax saturation problem",
            "a checkpoint saves the model state so you can resume training later and the tokenize step converts raw text into tokens that the language model can process",
            "the parameter count of the model affects both inference speed and memory usage while quantization reduces the batch size needed for training the convolutional layers"
        ]
    },
    "rust": {
        name: "Rust",
        texts: [
            "the trait bounds require that the type implement the option and result enums while the lifetime parameter ensures that the borrowed reference remains valid",
            "async functions in rust return a future that you need to await and the match expression allows you to handle every case of an enum in a type safe way",
            "when you borrow a value you need to respect the lifetime rules and the mut keyword allows you to modify the reference if it is mutable",
            "the derive macro automatically implements the trait for your struct and the closure captures variables from the surrounding scope by reference or by value",
            "every impl block defines methods for a type and you can return an option to indicate that a value might not exist and use match to handle each case",
            "the return type of an async function is a future that you must await and the result enum can hold either a success value or an error that you handle with match",
            "when you impl a trait for a type the borrow checker ensures that lifetime constraints are satisfied and the closure can capture mut references safely",
            "the derive macro generates impl blocks for your enum or struct and you can use match to return different option values based on the pattern you derive",
            "a closure in rust can borrow or move values from its scope and the lifetime of the borrow must be valid for as long as the closure exists",
            "the trait system lets you write generic code where the return type is an option or result and you await the async computation then match on the result"
        ]
    },
    "haskell": {
        name: "Haskell/FPL",
        texts: [
            "the monad typeclass provides a way to sequence computations while the functor allows you to map over values and the monoid gives you a way to combine them",
            "lambda expressions in haskell are anonymous functions that you can define inline and the typeclass system provides ad hoc polymorphism through constraints",
            "maybe is a type that represents optional values and it is a monad which means you can sequence operations that might fail using the bind operator",
            "a functor must satisfy the identity and composition laws while a monad must also satisfy the left and right identity and associativity through the typeclass",
            "every monad is also a functor and a monoid in the category of endofunctors which is where the famous saying comes from about lambda the ultimate",
            "the monad typeclass defines how to chain operations while the functor typeclass lets you transform values inside a context and lambda captures the essence of abstraction",
            "a monoid provides a way to combine elements with an identity value and every monad is also a functor through the typeclass hierarchy",
            "the maybe type is both a functor and a monad which means you can use lambda expressions with it and compose operations that might return nothing",
            "typeclass constraints in haskell allow you to write polymorphic functions where the type must be a functor or monad and you can use lambda for inline definitions",
            "the monad laws ensure that sequencing is associative and the functor laws preserve identity which means that every lambda in the typeclass system composes correctly"
        ]
    },
    "4key": {
        name: "4-Key",
        texts: [
            "the transformer architecture uses attention mechanisms and quantization to reduce model size while async implementation of the struct forall allows efficient inference",
            "haskell forall quantification in the typeclass system enables architecture patterns where the transformer implementation uses async struct definitions for quantization",
            "the skinly platform and beiersdorf research both use transformer models with quantization for their architecture and async struct implementation patterns",
            "async struct definitions in the implementation of transformer models enable quantization of the architecture while forall patterns from haskell improve the inference pipeline",
            "the quantization of transformer models in the architecture reduces memory while async struct implementation and forall patterns from haskell help optimize the beiersdorf pipeline"
        ]
    },
    "dickens": {
        name: "Dickens",
        texts: [
            "it was the best of times it was the worst of times it was the age of wisdom it was the age of foolishness it was the epoch of belief it was the epoch of incredulity it was the season of light it was the season of darkness it was the spring of hope it was the winter of despair we had everything before us we had nothing before us we were all going direct to heaven we were all going direct the other way",
            "there are dark shadows on the earth but its lights are stronger in the shadow which is very good people who are always there and have been through more than people think they know",
            "the pain of parting is nothing to the joy of meeting again and while some people would think that this was not the right way to look at things it was still a good thing to keep in mind when you found yourself under great pressure from the world around you",
            "family notoriety and the want of early support had been the cause of many a bad decision and the truth was that some people could never really believe that their case was lost even when every hand was against them",
            "it is a far far better thing that i do than i have ever done it is a far far better rest that i go to than i have ever known and the people who were there could hear the truth of these words as they left that place forever",
            "no one is useless in this world who lightens the burden of it to anyone else and those who give their time and support to both friend and family will find that the value of what they do is more than they could think possible"
        ]
    },
    "austen": {
        name: "Austen",
        texts: [
            "it is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife however little known the feelings or views of such a man may be on his first entering a neighbourhood this truth is so well fixed in the minds of the surrounding families that he is considered as the rightful property of some one or other of their daughters",
            "she was a woman of mean understanding little information and uncertain temper when she was discontented she fancied herself nervous the business of her life was to get her daughters married its solace was visiting and news which could really help her think about what was important for the people around her",
            "there are very few of us who have heart enough to be really in love without encouragement and in nine cases out of ten it is much more the encouragement that the people need than what they could ever know about the way things work when they are together",
            "a lady imagination is very rapid it jumps from admiration to love from love to matrimony in a moment and those who find no value in such a relationship should think about what the effect of early education and family support might have on the general behavior of people",
            "to be fond of dancing was a certain step towards falling in love and very few young ladies who were not really in want of a husband could resist the activity of a ball where both nature and art conspire to give pleasure to every student of human truth",
            "her parent had left her with the highest opinion of his judgment and she knew that his name was one of quality in the history of that place and his business was a model of how a company should develop its product over time through research and management"
        ]
    },
    "orwell": {
        name: "Orwell",
        texts: [
            "it was a bright cold day in april and the clocks were striking thirteen winston smith his chin nuzzled into his breast in an effort to escape the vile wind slipped quickly through the glass doors of victory mansions though not quickly enough to prevent a swirl of gritty dust from entering along with him",
            "war is peace freedom is slavery ignorance is strength and the people who think they know what is really happening in the world should think again because the party will always find a way to make you need what they give you which is not the same as what you might think you want",
            "the best books are those that tell you what you know already and that is what the world should be about people working together through different times and finding some way to keep going even when things are very hard and the future might not be what was expected",
            "the family had become in effect an extension of the thought police and every parent was a government agent watching every move of their children for evidence of thoughtcrime while the media controlled what the public could view and the education system taught that history was just what the party said it was",
            "he knew that what he was doing was a serious crime against the state and that the support of his friend was the only thing keeping him from being discovered but the evidence of his own eyes and the truth he had found could not be denied even when the situation seemed impossible",
            "the theory and practice of oligarchical collectivism was the name of the article that explained how the party maintains power through control of the economy industry and security while changing the past to suit the needs of the present policy and using force to suppress any decision by the public to resist"
        ]
    },
    "twain": {
        name: "Twain",
        texts: [
            "the report of my death was an exaggeration and i can tell you that the truth of the matter is that people who talk about what they do not know are the worst kind of fools and there is no evidence that this situation will change any time in the next week",
            "when i was a young man i found that the best way to get the right answer was to ask the right question and this is a method that i have kept with me through both good times and bad because the value of early practice in any field of activity cannot be overstated",
            "the secret of getting ahead is getting started and the man who does not read good books has no advantage over the man who cannot read them which is why education and the support of a teacher are so important for every student who wants to develop their skills",
            "it is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt because the history of human behavior shows that those who talk too much about their business or their relationship or their family often find that their words have an effect they did not expect",
            "the difference between the almost right word and the right word is really a large matter and it is the difference between the lightning bug and the lightning which is a general truth about the quality of language and the art of writing that every parent and teacher should help their children understand",
            "whenever you find yourself on the side of the majority it is time to pause and reflect because the process of research into the nature of truth shows that the security of conventional wisdom is often just the comfort of not having to change your view or your policy when new evidence comes to light"
        ]
    },
    "doyle": {
        name: "Conan Doyle",
        texts: [
            "it is a capital mistake to theorize before one has data and the student of crime should begin by examining the evidence before forming any theory about the case because the truth is that insensibly one begins to twist facts to suit theories instead of theories to suit facts",
            "the world is full of obvious things which nobody by any chance ever observes and the general method of the detective is to find what is hidden in the side details that other people would pass by without a second thought or question about their meaning",
            "i have a turn both for observation and for deduction and the problem before us is to find how the activity of the criminal mind leaves its trace in the material world so that we can process the evidence and support our case with the truth",
            "education never ends Watson and it is a series of lessons with the greatest for the last and every report of a new case adds to our knowledge of human behavior and the method by which we can develop our skills in the art of detection",
            "when you have eliminated the impossible whatever remains however improbable must be the truth and this principle has guided my research into every situation where the value of clear thinking and careful observation of the relationship between facts has helped solve the most difficult case",
            "there is nothing more deceptive than an obvious fact and the history of crime shows that those who believe the first thing they hear about a company or a family or a government policy are often the least prepared to find the real answer that lies under the surface"
        ]
    },
    "shakespeare": {
        name: "Shakespeare",
        texts: [
            "all the world is a stage and all the men and women merely players and one man in his time plays many parts his acts being seven ages and each age has its own nature and quality that the people who watch must learn to understand",
            "the quality of mercy is not strained it drops as the gentle rain from heaven upon the place beneath and blesses both the giver and the receiver which is a truth that those in power should keep in mind when they make a decision that effects the life of another",
            "to be or not to be that is the question whether it is nobler in the mind to suffer the slings and arrows of outrageous fortune or to take arms against a sea of troubles and by opposing end them and this is a problem that every student of philosophy must consider",
            "friends romans countrymen lend me your ears and i will show you the truth of what has happened for the support of the people is the foundation of any government and the evidence of history teaches us that those who would change the world must first change the hearts and minds of the public",
            "we know what we are but know not what we may be and the early development of a child through education and family support is the process by which nature and art together create the general character of the person who will one day take their place in the world",
            "love looks not with the eyes but with the mind and therefore is winged cupid painted blind because the value of a relationship is not found in the material view of the other person but in the truth that two people can build together over time through their shared activity and practice"
        ]
    },
    "mixed": {
        name: "Mixed",
        texts: [
            "the neural network uses gradient descent with backprop to optimize the model parameters during training while the dropout layer prevents overfitting on the dataset",
            "in rust you can use async functions with await to handle concurrent operations while the trait system provides type safe polymorphism through bounds",
            "haskell uses monads to sequence computations and the maybe type represents optional values while the functor typeclass allows mapping over values",
            "the transformer architecture has become the foundation for modern language models with attention mechanisms that process tokens in parallel",
            "when you impl a trait for a struct in rust you need to satisfy the lifetime requirements and the borrow checker ensures memory safety",
            "the quantization of the model reduces the parameter count while keeping accuracy high and the embedding space is smaller which helps with inference speed",
            "the teacher said that every student who wants to learn about the world should study both the history of nature and the method of scientific research",
            "the company report showed that the management decision to develop a new product for the market was supported by evidence from quality research in the field",
            "the government policy on education and the support of both public and family was having a positive effect on the general level of student activity across the country",
            "when you look at the relationship between truth and value in the history of philosophy you find that every great theory about the nature of knowledge starts with a question",
            "the security of the system was a problem that both the industry and the research community needed to solve because the evidence showed that the current process was not working well",
            "her daughter was studying the history of media and its effect on public behavior while also doing research into how social change happens through education and family support over time"
        ]
    }
};
