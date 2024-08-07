// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Aged {
  readonly age?: number;
  outputAged?: number; // Optional parameter
}

interface Greetable extends Aged {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age?: number;

  constructor(n: string, age?: number) {
    this.name = n;
    if (age) {
      this.age = age;
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
let user2: Greetable;

// user1 = {
//   name: "General Kenobi",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("General Kenobi", 100);
user2 = new Person("Obi-wan");

user1.greet("Hello There!");
// user1.age = 6; this will result an error
console.log(user1);
