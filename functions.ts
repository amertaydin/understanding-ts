function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// this won't throw an error on compile time but it will on runtime
// let combineValues;
// combineValues = add;
// combineValues = 5;

// console.log(combineValues(1, 2));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

addAndHandle(1, 6, (result) => console.log(result));
