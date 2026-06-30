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
    console.log(`Hello ${employee.name}, dengan id ${employee.id}`);
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
  });

  // Method Polymorphism
  it("should support method polymorphism", function () {
    sayHello(new Employee("EMP-9797", "ripunn karyawan"));
    sayHello(new Manager("MNG-9797", "ripunn manager"));
    sayHello(new VicePresident("VP-9797", "ripunn vicepresident"));
  });
});
