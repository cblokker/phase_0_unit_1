// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Chase Blokker
//  2. Ryan Storberg


// 0. "YOU SIGNED... WHO?!"
var oliviaWilde = {
    name: "Olivia Wilde",
    age: 30,
    quote: "I was babysat by Christopher Hitchens."
}
  
var louisCK = {
    name: "Louis CK",
    age: 46,
    quote: "Evolution isn't something that happened in 1975."
}


// 1. "Here they Come!"
var clientele = {
    oliviaWilde: {
        name: "Olivia Wilde",
        age: 30,
        quote: "I was babysat by Christopher Hitchens."
    },
    louisCK: {
        name: "Louis CK",
        age: 46,
        quote: "Evolution isn't something that happened in 1975."
    }
}


// 2. "TIME IS MONEY!"
var Client = function(name, age, quote) {
    this.name = name,
    this.age = age,
    this.quote = quote
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"
var showemoff = function(clientele) {
    for (var i in clientele) {
        console.log("One of my clients is " + clientele[i].name + ", they are " + clientele[i].age + " and they said " + clientele[i].quote);
    }
}


// 4. "But wait, there's more!"
Client.prototype.showQuote = function() {
	console.log(this.quote)
};

shooterMcGavin.showQuote();


// 5.  ** BONUS **


//  6.  Your Reflection:
// I enjoyed this GPS.  Ryan and I switched between driver and navigator all the time, which gave us
// practice doing both.  I think we made a good team, and I look forward to working with him again!
// I learned a lot during this GPS!



