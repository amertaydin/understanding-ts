let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Mert";

// we need to know the type to assign unknown
if (typeof userInput === "string") userName = userInput;

// this will never return a result because it just throws an error
function generateError(message: string, err: number): never {
  throw { message: message, errorCode: err };
}

console.log(generateError("Error", 400));
