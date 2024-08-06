abstract class Department {
  static fiscalYear = 2024;
  // private readonly id : string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // No implementation since it's abstract
  abstract describe(): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class SoftwareDepartment extends Department {
  describe(): void {
    console.log(`Software Department - ID ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "Accounting");
  }

  describe(): void {
    console.log(`Accounting Department - ID ${this.id}`);
  }
}

class FinanceDepartment extends Department {
  private lastReport: string;
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, "Finance");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  describe(): void {
    console.log(`Finance Department - ID ${this.id}`);
  }

  // Overriding the addEmployee method in base class
  addEmployee(employee: string): void {
    if (employee == "Frank") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  // getter
  get mostRecentReport(): string {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  // settter
  set mostRecentReport(report: string) {
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
// software.employees[3] = "Neal"; we make it private to not modify it like that
software.describe();
software.printEmployeeInformation();

// Since this doesn't have name propert it will print undefined
// const softwareCopy1 = { describe: software.describe };
// softwareCopy1.describe();

const accounting = new AccountingDepartment("d2", ["Jenny", "John"]);
accounting.addEmployee("Lebron");
accounting.addEmployee("Kobe");
accounting.addEmployee("Dwight");
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting);

const finance = new FinanceDepartment("d3", ["market", "btc"]);
finance.addReport("food");
console.log(finance.mostRecentReport);
finance.mostRecentReport = "prices";
console.log(finance.mostRecentReport);
finance.addEmployee("Kimiko");
finance.addEmployee("Frank");
finance.describe();
console.log(finance);
