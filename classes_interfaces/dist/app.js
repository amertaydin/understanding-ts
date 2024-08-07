"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, age) {
        this.name = n;
        if (age) {
            this.age = age;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
let user2;
user1 = new Person("General Kenobi", 100);
user2 = new Person("Obi-wan");
user1.greet("Hello There!");
console.log(user1);
//# sourceMappingURL=app.js.map