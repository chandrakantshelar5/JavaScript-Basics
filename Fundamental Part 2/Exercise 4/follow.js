
const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

const greeting =
  "Hello! My name is " + fullName + " and I am " + age + " years old.";

console.log(greeting);


module.exports = {
  testGroup: "a",
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
};

// Step 3: (Be sure to comment out Step 2)

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }
