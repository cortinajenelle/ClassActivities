// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};

// what will the following lines print?
obj[key];
// "the key is 'key'";
obj.key;
// "the key is 1";
obj["key"];
// "the key is "key"";

// Create an object with at least four properties, each with a different data type.

let myObject = {
  name: "Cortina Jenelle Caldwell", // String
  age: 36, // Number
  isMarried: false, // Boolean
  children: ["Sun", "Moon"], // Array
};

// Name one of the four properties "collection" and set its value to an Array or Object.

let myObject = {
  name: "Cortina Jenelle Caldwell", // String
  age: 36, // Number
  isMarried: false, // Boolean
  collection: ["Philanthrope", "Lofi Girl", "OMGKirby"], // Array
};

// Access a value in the "collection" property

console.log(myObject.collection[0]); // prints "item1"

// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Avatar",
  number: 21,
  color: "black"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things

let favoriteThings = ["french fries", "travel", "poetry", "reading"];

let sentence = `My favorite things in JavaScript are: ${favoriteThings.join(', ')}.`;

console.log(sentence); // prints "My favorite things in JavaScript are: french fries, travel, poetry, reading."


// Access the values "b", 4, and 6 from obj.list

let obj = {
  list: ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
};

console.log(obj.list[1]); // prints 'b'
console.log(obj.list[6]); // prints 4
console.log(obj.list[8]); // prints 6
