type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // for objects it's union

const e1: ElevatedEmployee = {
  name: "Mert",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // this is the intersection for types so it's number

//  We can also do it like this
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log("Name: ", employee.name);

  if ("privileges" in employee)
    console.log("Privileges: " + employee.privileges);
  // we can't use typeof here because it will simply return object
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

  loadCargo(amount: number) {
    console.log("loading cargo ... " + amount);
  }
}

type Vehicle = Truck | Car;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle.loadCargo(100) won't work because it's only in Truck
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v2);
