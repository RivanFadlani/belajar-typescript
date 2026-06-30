describe("Method Overriding", function () {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}! my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    // overriding method dari employee
    sayHello(name: string): void {
      // super method. memanggil method yang sama dari parent (Employee)
      super.sayHello(name);
      console.log(`Weh! mas ${name} timpa teks punya ${this.name} loh ya xD`);
    }
  }

  it("should support method overriding", function () {
    const employee = new Employee("Rivan");
    employee.sayHello("ripunn");

    const manager = new Manager("Frieren");
    manager.sayHello("Fern");

    // hasilnya, setiap hasil log sayHello ditiap class akan berbeda-beda, mau Employee ataupun Manager
  });
});
