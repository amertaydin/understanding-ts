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
useVehicle(v2);
//# sourceMappingURL=app.js.map