"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class SoftwareDepartment extends Department {
    describe() {
        console.log(`Software Department - ID ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, admins) {
        super(id, "Accounting");
        this.admins = admins;
    }
    describe() {
        console.log(`Accounting Department - ID ${this.id}`);
    }
}
class FinanceDepartment extends Department {
    constructor(id, reports) {
        super(id, "Finance");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new FinanceDepartment("d3", []);
        return this.instance;
    }
    describe() {
        console.log(`Finance Department - ID ${this.id}`);
    }
    addEmployee(employee) {
        if (employee == "Frank") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found");
    }
    set mostRecentReport(report) {
        if (!report) {
            throw new Error("Please provide a valid value");
        }
        this.addReport(report);
    }
}
const employee1 = Department.createEmployee("Nicole");
console.log(employee1, Department.fiscalYear);
const software = new SoftwareDepartment("d1", "Software");
software.addEmployee("Mert");
software.addEmployee("Batur");
software.addEmployee("Ali");
software.describe();
software.printEmployeeInformation();
const accounting = new AccountingDepartment("d2", ["Jenny", "John"]);
accounting.addEmployee("Lebron");
accounting.addEmployee("Kobe");
accounting.addEmployee("Dwight");
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting);
const finance = FinanceDepartment.getInstance();
const finance1 = FinanceDepartment.getInstance();
finance.addReport("food");
console.log(finance.mostRecentReport);
finance.mostRecentReport = "prices";
console.log(finance.mostRecentReport);
finance.addEmployee("Kimiko");
finance.addEmployee("Frank");
finance.describe();
console.log(finance);
//# sourceMappingURL=classes.js.map