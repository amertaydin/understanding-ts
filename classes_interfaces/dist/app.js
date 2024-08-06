"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const software = new Department("d1", "Software");
software.addEmployee("Mert");
software.addEmployee("Batur");
software.addEmployee("Ali");
software.describe();
software.printEmployeeInformation();
//# sourceMappingURL=app.js.map