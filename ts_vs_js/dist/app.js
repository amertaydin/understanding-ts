"use strict";
const userName = "Mert";
let user = "Joe";
user = "Helen";
const add1 = (a, b) => {
    return a + b;
};
const add2 = (a, b) => a + b;
const printOutput = (output) => console.log(output);
const hobbies = ["Sports", "Tennis"];
const activeHobbies = ["Running"];
activeHobbies.push(...hobbies);
const person = {
    firstName: "Mert",
    age: 25,
};
const copyPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((sum, curr) => sum + curr, 0);
};
console.log(add(1, 5, 6, 7));
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName, age } = person;
//# sourceMappingURL=app.js.map