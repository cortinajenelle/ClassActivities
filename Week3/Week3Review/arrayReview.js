// Array Activity 1
// Create an Array called students that contains the names of 5 students

let students = ["Saul", "Raul", "Paul", "U-Haul", "Craul"]

// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in index 2

console.log(students[students.length-2]);

// Loop over the students Array to print out each name

const students = ["Saul", "Raul", "Paul", "U-Haul", "Craul"];
for (let item of students) {
  console.log(item);
}

// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "

let roster = "These are the students in the list:";

// Loop over the students Array again, but this time each iteration of the
// loop should add the value to the end of the roster string AND a blank space
// After the loop, print roster

// not -> roster += students; OR console.log(roster);

for (let item of students) {
//  roster = roster + ` ${item} `; is the longform version of this below
  roster += ` ${item} `;
}
console.log(roster);
// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"
