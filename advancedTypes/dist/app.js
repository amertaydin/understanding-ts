"use strict";
const e1 = {
    name: "Mert",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchedUserData = {
    id: "u1",
    name: "Max",
};
const userInput = null;
const storedDate = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storedDate);
function printEmployeeInformation(employee) {
    console.log("Name: ", employee.name);
    if ("privileges" in employee)
        console.log("Privileges: " + employee.privileges);
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "Johhny", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving a truck");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo(amount) {
        console.log("loading cargo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 100 });
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character!",
};
//# sourceMappingURL=app.js.map