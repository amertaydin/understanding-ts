const personName = "Mert";
console.log(personName);

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log(message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You clicked"));
}
