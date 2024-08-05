const userName = "Mert";
// username = "Dan" you can't
let user = "Joe";
user = "Helen";

const add1 = (a: number, b: number) => {
  return a + b;
};

// You can do that if you have one expression
const add2 = (a: number, b: number) => a + b;

// we specify the output
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const hobbies = ["Sports", "Tennis"];
const activeHobbies = ["Running"];

// Arrays are references you can push it

// activeHobbies.push(hobbies);
activeHobbies.push(...hobbies); // sends every single argument of the array

const person = {
  firstName: "Mert",
  age: 25,
};

const copyPerson = { ...person };

// can be used to get many parameters as we want
const add = (...numbers: number[]) => {
  return numbers.reduce((sum, curr) => sum + curr, 0);
};

console.log(add(1, 5, 6, 7));

// Destructuring an array
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// Destructuring an object
const { firstName, age } = person;
