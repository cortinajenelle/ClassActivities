// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let name = "Rafael";
let favoriteSong = "Cupid Shuffle";
let favoriteThing = null;
let age = 33;
let bool = true;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof string);
console.log(typeof number);
console.log(typeof bool);
console.log(typeof wage);
console.log(typeof favoriteThing);

// create a variable that references a template literal

favoriteSong = "Wobble";

// inside the template literal, use two of the above variables

console.log(`Do you hear ${favoriteSong} playing?`);

// reassign the value of the variable that references "null"

favoriteThing = "strawberries";

// print the value and its type

console.log(typeof favoriteThing);

// print a variable that causes a ReferenceError

console.log(typeof favoriteThing);

// alter the previous line to no longer cause a ReferenceError

favoriteThing = "ocean";
console.log(typeof favoriteThing);
