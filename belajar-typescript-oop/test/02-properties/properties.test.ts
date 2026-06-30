describe("Properties", function () {
  class Customer {
    // Property atau bisa disebut Field
    readonly id: number; // readonly
    name: string; // mandatory
    age?: number; // optional property
    rank: string = "Silver"; // default value
    // rank: sama seperti optional property, default value tidak perlu dipanggil di parameter

    // constructor menerima argument dari new instance
    constructor(id: number, name: string) {
      this.id = id; // mengacu pada field di luar scope constructor
      this.name = name; // * linked ke field/property 'name'
    }

    // Method
    sayHello(name: string): void {
      // ${name} mengambil dari parameter sayHello
      // ${this.name} mengambil dari hasil argument instance object
      console.log(`Hello, ${name}! My name is ${this.name}`);
    }
  }

  it("should can have properties", function () {
    const customer: Customer = new Customer(1, "ripunn");
    customer.age = 18;

    console.log(customer);
    console.log("id:", customer.id);
    console.log("name:", customer.name);
    console.log("age:", customer.age);
    console.log("default value:", customer.rank);
  });

  // Method
  it("should can have method", function () {
    const customer: Customer = new Customer(1, "rizcung");
    customer.sayHello("rizka");
  });
});
