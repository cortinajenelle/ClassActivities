// create a variable called "name" that references a string

const { clear } = require("console");

let name = "Cortina";

// create a variable called "favoriteSong" that references a string

let favoriteSong = "Purple Rain";

// create a variable called "wage" that references a number

let wage = 750;

// create a variable called "age" that references a number

let age = 36;

// create a variable called "onlyChild" that references a boolean

let onlyChild = true;

// create a variable called "satisfied" that references a boolean

let satisfied = false;

// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"

let favoriteThing = "fries";
console.log (typeof favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"

favoriteSong = "Drip Too Hard";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type

favoriteThing = "pizza";

// Happy Birthday!
// Reassign "age" to a new value

age = 40;

// You got a big raise at work.
// Reassign "wage" to a new value

wage = 1000;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true

satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two of the above variables

console.log("Hello, my name is " + name + ", and I am turning " + age + ");

let a;
let b = null;

console.log(typeof a);
console.log(typeof b);
