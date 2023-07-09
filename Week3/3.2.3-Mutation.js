let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = "";

// print x, y, and z this is a TRUTHY value

console.log(!!{});

// const a = "name";
// const b = [];
// const c = {};
// try to reassign a, b, and c to FALSY values
// can't! already declared

// using BRACKET NOTATION, assign a value to b
b[0] = "value";

// using DOT NOTATION, assign a PROPERTY to c
c.property = "value";

// using DOT NOTATION, assign a METHOD to c
c.method = () => {
  console.log("im a method!");
};

// using BRACKET NOTATION, call the method in c
c["method"]();

// print a, b, and c

console.log(!!{});
