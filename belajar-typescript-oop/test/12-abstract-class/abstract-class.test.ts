describe("Abstract Class", function () {
  // abstract class itu seperti interface
  // dia tidak boleh langsung mengimplementasi kode bila bertipe abstract
  // class abstract tidak bisa dipanggil sebagai instance object, karena sifatnya hanyalah sebagai blueprint

  // hanya deklarasi
  abstract class Customer {
    readonly id: number;
    abstract name: string; // hanya deklarasi
    address: string;

    constructor(id: number, address: string) {
      this.id = id;
      this.address = address;
    }

    hello() {
      console.log("hello");
    }

    abstract sayHello(name: string): void; // hanya deklarasi
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, address: string, name: string) {
      super(id, address);
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}! my name is ${this.name}`);
    }
  }

  it("should support abstract class", function () {
    const firstCustomer = new RegularCustomer(1, "Ripunn", "Indonesia");
    console.log(firstCustomer);
    console.log(firstCustomer.id);
    console.log(firstCustomer.name);
    console.log(firstCustomer.address);
  });
});
