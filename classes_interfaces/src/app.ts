class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
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
// software.employees[3] = "Neal"; we make it private to not modify it like that
software.describe();
software.printEmployeeInformation();

// Since this doesn't have name propert it will print undefined
// const softwareCopy1 = { describe: software.describe };
// softwareCopy1.describe();
