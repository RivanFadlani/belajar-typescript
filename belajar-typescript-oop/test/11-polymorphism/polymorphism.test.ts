describe("Polymorphism", function () {
  class Employee {
    public id: string;
    public name: string;

    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  // Method Polymorphism
  // function dengan parameter class Employee,
  // bisa menerima argument dalam bentuk instance object baru
  // bisa class Employee, ataupun class turunan dari class Employee
  function sayHello(employee: Employee): void {
    // urutannya harus dari turunan yang paling bawah dulu
    // 3. VicePresident -> 2. Manager -> 1. Employee
    if (employee instanceof VicePresident) {
      const vicePresident = employee as VicePresident;
      console.log(
        `Hello Vice President ${vicePresident.name} dengan id ${vicePresident.id}`,
      );
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name} dengan id ${manager.id}`);
    } else {
      console.log(`Hello Employee ${employee.name} dengan id ${employee.id}`);
    }
  }

  it("should support polymorphism", function () {
    let employee: Employee = new Employee("EMP-9797", "Ripunn");
    console.log(employee);
    console.log("Bentuk Employee:", employee.name);

    employee = new Manager("MNG-9797", "Ripunn");
    console.log(employee);
    console.log("Bentuk Manager:", employee.name);

    employee = new VicePresident("VP-9797", "Ripunn");
    console.log(employee);
    console.log("Bentuk VicePresident:", employee.name);

    // experiment: pengecekan instanceof
    expect(employee instanceof VicePresident).toBe(true);
    expect(employee instanceof Manager).toBe(true);
    expect(employee instanceof Employee).toBe(true);
  });

  // Method Polymorphism
  it("should support method polymorphism", function () {
    sayHello(new Employee("EMP-9797", "ripunn karyawan"));
    sayHello(new Manager("MNG-9797", "ripunn manager"));
    sayHello(new VicePresident("VP-9797", "ripunn vicepresident"));
  });
});
