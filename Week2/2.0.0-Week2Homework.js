// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.

const pizzaPlace = "Lupis Pizza";
let numberOfToppings = 7;

// Print the variables and their types.

console.log(pizzaPlace);
console.log(numberofToppings);

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

console.log('"When you order at" + { pizzaPlace } + ", they give you the option of " + { numberOfToppings } + "toppings. "'git );

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings,
// or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else if (numberofToppings > 10) {
  console.log("A whole lot of pizza.");
}

// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

let x = 1;
let numberofToppings;
while (x <= 10) {
  numberofToppings = x;
  console.log(numberofToppings);
  x++;
}
