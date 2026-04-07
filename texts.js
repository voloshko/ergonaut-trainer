const TEXTS = {
    "2key": {
        name: "2-Key",
        texts: [
            "the people would know that some good time was very near and they could also think about what was really important before the world was even found",
            "you should not think about what your work would be like when you can just make some very good time for her and his people who are with you",
            "when they are very good people who know that some time was also been found under his way which was really more than what they need",
            "the only way people could work with your time was that they should never even think about what was really good for her and his world",
            "before they know it some people will come from under the great world and make his way into the time which was been really good",
            "even when you think about what his people need you should also know that the very best work was been found with some great time"
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
            "whether their story long or small take each point into account and help keep the same thing right first through well actually"
        ]
    },
    "ml": {
        name: "ML/AI",
        texts: [
            "the neural network uses gradient descent with backprop to optimize the model parameters during training while the dropout layer prevents overfitting on the dataset",
            "latent diffusion models have become very popular for image generation because they work in a compressed latent space which makes the training process more efficient",
            "during inference the softmax function converts each logit into probabilities and the checkpoint system allows you to resume training from where you left off after each epoch",
            "the transformer architecture processes the language input using self attention while the convolutional layer extracts local features from the embedding space",
            "the mamba architecture offers an alternative to transformer models with linear scaling while maintaining competitive performance on language tasks through selective state spaces"
        ]
    },
    "rust": {
        name: "Rust",
        texts: [
            "the trait bounds require that the type implement the option and result enums while the lifetime parameter ensures that the borrowed reference remains valid",
            "async functions in rust return a future that you need to await and the match expression allows you to handle every case of an enum in a type safe way",
            "when you borrow a value you need to respect the lifetime rules and the mut keyword allows you to modify the reference if it is mutable",
            "the derive macro automatically implements the trait for your struct and the closure captures variables from the surrounding scope by reference or by value",
            "every impl block defines methods for a type and you can return an option to indicate that a value might not exist and use match to handle each case"
        ]
    },
    "haskell": {
        name: "Haskell/FPL",
        texts: [
            "the monad typeclass provides a way to sequence computations while the functor allows you to map over values and the monoid gives you a way to combine them",
            "lambda expressions in haskell are anonymous functions that you can define inline and the typeclass system provides ad hoc polymorphism through constraints",
            "maybe is a type that represents optional values and it is a monad which means you can sequence operations that might fail using the bind operator",
            "a functor must satisfy the identity and composition laws while a monad must also satisfy the left and right identity and associativity through the typeclass",
            "every monad is also a functor and a monoid in the category of endofunctors which is where the famous saying comes from about lambda the ultimate"
        ]
    },
    "4key": {
        name: "4-Key",
        texts: [
            "the transformer architecture uses attention mechanisms and quantization to reduce model size while async implementation of the struct forall allows efficient inference",
            "haskell forall quantification in the typeclass system enables architecture patterns where the transformer implementation uses async struct definitions for quantization",
            "the skinly platform and beiersdorf research both use transformer models with quantization for their architecture and async struct implementation patterns"
        ]
    },
    "dickens": {
        name: "Dickens",
        texts: [
            "it was the best of times it was the worst of times it was the age of wisdom it was the age of foolishness it was the epoch of belief it was the epoch of incredulity it was the season of light it was the season of darkness it was the spring of hope it was the winter of despair we had everything before us we had nothing before us we were all going direct to heaven we were all going direct the other way",
            "there are dark shadows on the earth but its lights are stronger in the shadow which is very good people who are always there and have been through more than people think they know",
            "the pain of parting is nothing to the joy of meeting again and while some people would think that this was not the right way to look at things it was still a good thing to keep in mind when you found yourself under great pressure from the world around you"
        ]
    },
    "austen": {
        name: "Austen",
        texts: [
            "it is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife however little known the feelings or views of such a man may be on his first entering a neighbourhood this truth is so well fixed in the minds of the surrounding families that he is considered as the rightful property of some one or other of their daughters",
            "she was a woman of mean understanding little information and uncertain temper when she was discontented she fancied herself nervous the business of her life was to get her daughters married its solace was visiting and news which could really help her think about what was important for the people around her",
            "there are very few of us who have heart enough to be really in love without encouragement and in nine cases out of ten it is much more the encouragement that the people need than what they could ever know about the way things work when they are together"
        ]
    },
    "orwell": {
        name: "Orwell",
        texts: [
            "it was a bright cold day in april and the clocks were striking thirteen winston smith his chin nuzzled into his breast in an effort to escape the vile wind slipped quickly through the glass doors of victory mansions though not quickly enough to prevent a swirl of gritty dust from entering along with him",
            "war is peace freedom is slavery ignorance is strength and the people who think they know what is really happening in the world should think again because the party will always find a way to make you need what they give you which is not the same as what you might think you want",
            "the best books are those that tell you what you know already and that is what the world should be about people working together through different times and finding some way to keep going even when things are very hard and the future might not be what was expected"
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
            "the quantization of the model reduces the parameter count while keeping accuracy high and the embedding space is smaller which helps with inference speed"
        ]
    }
};
