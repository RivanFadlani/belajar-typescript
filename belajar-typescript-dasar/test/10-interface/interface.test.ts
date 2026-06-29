import { describe, it, expect } from "vitest";
import type { Seller } from "../../src/10-interface/interface";
import type { Employee, Manager } from "../../src/10-interface/Employee";

describe("Interface", function () {
  // Interface
  it("should support Interface in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Mamat Gun Shop",
      // address?: string,
      nib: "290712346", // read-only property
      npwp: "892134922", // read-only property
      // readonly type?: string
    };

    seller.name = "Farhan Kebab"; // bisa diubah karena tidak read-only
    // seller.nib = "892134922" * tidak bisa diubah karena property bersifat read-only

    console.log(seller);
  });

  // Function Interface
  it("should support function interface in typescript", function () {
    interface AddFunction {
      //         parameter      ----    return
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number) => {
      return value1 + value2;
    };
    // kalau di javascript sama saja seperti ini:
    // const add = () => { return value1 + value2 }

    expect(add(2, 2)).toBe(4);
  });

  // Indexable Interface
  it("should support indexable interface in typescript", function () {
    interface StringArray {
      //   index   --   value
      [index: number]: string;
    }

    const fruits: StringArray = ["watermelon", "banana", "starfruit"];
    console.log(fruits);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "ripunn",
      address: "indonesia",
    };

    expect(dictionary["name"]).toBe("ripunn");
    expect(dictionary["address"]).toBe("indonesia");
  });

  // Extending Interface
  it("should support extending interface", function () {
    // interface (Employee)
    const employee: Employee = {
      id: 1,
      name: "ripunn",
      division: "front end",
    };

    console.log(employee);

    // extend interface (Manager) from 'Employee'
    const manager: Manager = {
      id: 2, // extend property
      name: "rivan", // extend property
      division: "back end", // extend property
      numberOfEmployee: 7,
    };

    console.log(manager);
  });

  // Funtion di Interface
  it("should support function in interface", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "ripunn",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.log(person.sayHello("kirijo"));
  });

  // Intersection Types
  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    // bisa saja menggunakan extends seperti ini:

    // ``` typescript
    // interface Domain extends HasId, HasName {
    // * tapi kalau kasusnya kita tidak perlu menambahkan attr,
    // * maka, cara ini kurang tepat
    // }
    // ```

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 1,
      name: "ripunn",
    };

    console.log(domain);
  });

  // Type Assertions
  it("should support type assertions", function () {
    // digunakan ketika ingin copy tipe data dari interface yang sudah punya tipe data, ke-
    // tipe data yang sifatnya any/tidak punya tipe data
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    // object tidak punya type annotation (any)
    // sebetulnya, Type Assertions tetap harus menggunakan property yang sama dengan referensi interface-nya
    const person: any = {
      name: "ripunn",
      age: 18,
    };

    // convert:
    // buat variable baru 'personPerson' dengan tipe data 'Person'
    // lalu, panggil object 'person' dan convert tipe data menjadi 'Person'
    const personPerson: Person = person as Person;

    // tidak bisa akses 'personPerson.age', karena di referensi interface 'Person' tidak ada property 'age'
    // console.log(personPerson.age);

    // atau, ketika kita panggil 'sayHello()'
    // personPerson.sayHello("ripunn");
    // 'sayHello()' tidak bisa dipanggil juga, karena 'sayHello()' tidak pernah dipanggil di object 'person: any'

    console.log(personPerson);
  });
});
