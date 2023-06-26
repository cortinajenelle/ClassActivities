// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let name = "Rafael";
let age = 33;
let bool = true;
let favoriteSong = undefined;
let favoriteThing = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(name, age, bool, favoriteSong, favoriteThing);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

let str = 'This is a string ${name}, and this is a number: ${age';
console.log(str);

// reassign the value of the variable that references "null"

favoriteThing = "strawberries";

// print the value and its type

console.log(favoriteThing, type of "strawberries");

// print a variable that causes a ReferenceError

console.log("f");

// alter the previous line to no longer cause a ReferenceError

favoriteThing = "ocean";
console.log(typeof favoriteThing);
