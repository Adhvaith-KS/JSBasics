// const a = 10;
// const b = 10;

// console.log("LESGOOO");
// console.log("A is: " + a);

// if (a == b) {
//   console.log("bruh");
// }

//var variables will work outside scopes (anything inside curly braces)
//let will allow you to change value of the variables, const won't

// for (let i = 0; i < 10; i++) {
//   console.log("Samarth is a loser");
// }

// function printt(x) {
//   console.log(x);
// }

// printt("LESGOOOOOOOOOOOOOOOOOOOOOOOOO");
//npm init
//ctr+? makes it a comment

var oneLinerJoke = require("one-liner-joke");
var getRandomJoke = oneLinerJoke.getRandomJoke({
  exclude_tags: ["insult", "motivational"],
});
const jokee = getRandomJoke.body;

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: jokee,
    e: "oO",
    T: "U ",
  })
);

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty']
*/
// var getRandomJoke = oneLinerJoke.getRandomJoke({
//   exclude_tags: ["insult", "motivational"],
// });
// console.log(getRandomJoke.body);
// //without ".body" it'll
