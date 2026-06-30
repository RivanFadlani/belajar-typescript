describe("Inheritance", function () {
  class Employee {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  class Manager extends Employee {
    // mewarisi property Employee
  }

  class Director extends Manager {
    // mewarisi property Manager dan Employee
  }

  it("should support inheritance", function () {
    const employee = new Employee(1, "Riven");
    console.log(employee);

    const manager = new Manager(2, "Ripunn");
    console.log(manager);

    const director = new Director(3, "Rivan");
    console.log(director);
  });
});
