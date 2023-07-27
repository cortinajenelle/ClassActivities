// QUESTION 5
// Write a function that determines if a string is a palindrome.
// A palindrome is a string that is the same forward and backwards.

// Example :
// isPalindrome('racecar') // --> true
// isPalindrome('table') // --> false

// TALKING THROUGH IT
// Step 1 - Review instructions and organize our steps.
// Step 2 - Dissect question and start to provide the code for the response.
// Step 3 - Declare the function
// Step 4 - Review example and reverse engineer to determine which syntax we need to use
// Step 5 - Question to Solve - how do we get our code to recognize that Palindrome and have it return its value as true?
// Note: At some point we will have to compare letters to letters or string to string. SOME COMPARISON of some kind.
// Step 5 - What comparison operators will we need to use?
// Note: Data will need to put out a boolean value so we get true/false.
// Step 5 - What happens if we have numbers in the string?
// Note: Only letters are expected in the string.

// CODE OPTION 1

function isPalindrome() {
  if ("racecar" === "racecar") {
    return console.log("true");
  } else {
    return console.log("false");
  }
}

// CODE OPTION 2 

isPalindrome("racecar");

// Would the following return true or false?

// Strict
3 === 3; // true
2 === "two"; // false
3 !== "3"; // true
"three" !== "three"; // false

// QUESTION 2 : 
