describe("Super Constructor", function () {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    id: string;
    department: string;

    // parameter untuk super(), ditaruh dipaling awal di parameter
    constructor(name: string, id: string, department: string) {
      // karena class Employee (class child dari Person), maka kita harus memanggil constructor dari parent
      super(name); // constructor dari parent class (Person)
      this.id = id;
      this.department = department;
    }
  }

  it("should support super constructor", function () {
    const employee = new Employee("Rivan Fadlani", "EMP-9797", "Tech");
    console.log(employee);
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.department);
  });
});
