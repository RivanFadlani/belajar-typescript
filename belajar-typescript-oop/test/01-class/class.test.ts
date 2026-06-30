describe("Class", function () {
  class Customer {
    // constructor itu seperti function dia memiliki parameter yang bisa diisi
    constructor() {
      console.log("Create New Customer");
    }
  }

  class Order {
    constructor() {
      console.log("aku mau mie ayam 3");
    }
  }

  // Class
  it("should can create class", function () {
    // Explicit, tipe datanya adalah 'Customer'
    // * const customer: Customer = new Customer();
    // Implicit, biarkan typescript cari tahu sendiri
    // * const order = new Order();
  });

  // Constructor
  it("should can create constructor", function () {
    new Customer(); // memanggil constructor pada class Customer
    new Order();
  });
});
