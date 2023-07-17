// TODO: using the function expressions below, refactor them into function declarations
// #1 function expression
const greet = function() {
  console.log("Hello!");
};

// #1 function declaration
function greet(){
  console.log("Hello!");
}

// #2 function expression
const threeModTwo = function(){
  console.log(3 % 2);
};

// #2 function declaration
function threeModTwo(){
  console.log(3 % 2);
}

// #3 function expression
let age = 18;
checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkDrivingAge();

// #3 function declaration
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
