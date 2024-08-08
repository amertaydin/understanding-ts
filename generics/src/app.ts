// const names: Array<string> = []; //same as string[]
// // names[0].split(' '); we can call operations since we know it's a string

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Boxing"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["General", "Skywalker"]));
// console.log(countAndDescribe(5)); this won't work because it doesn't have length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// extractAndConvert({}, "name");
extractAndConvert({ name: "Mert" }, "name");

// generic classes
type Acceptable = number | string | boolean;
class DataStorage<T extends Acceptable> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item)) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return { ...this.data };
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Mert");
textStorage.addItem("Jan");
textStorage.addItem("Hank");
textStorage.removeItem("Jan");
console.log(textStorage);

const numberStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// const mertObj = { name: "Mert" };
// objStorage.addItem(mertObj);
// objStorage.addItem({ name: "Niko" });
// objStorage.removeItem(mertObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // makes all these properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// this means no operation allowed but it can be mutated
// const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); this won't
// names[0] = "Mert"; this works
