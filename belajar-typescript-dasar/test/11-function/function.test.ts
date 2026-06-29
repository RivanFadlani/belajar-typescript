import { describe, it, expect } from "vitest";

describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("ripunn")).toBe("Hello ripunn");

    // jika tidak ada tipe data di return value, maka beri tipe data 'void'
    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    printHello("Rivan");
  });

  // Function Parameter
  it("should support default parameter", function () {
    //        ---         default parameter
    function sayHello(name: string = "Neighbor") {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Neighbor");
    expect(sayHello("Lolok")).toBe("Hello Lolok");
  });

  // Optional Parameter
  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello, ${firstName} ${lastName}`;
      } else {
        return `Hello, ${firstName}`;
      }
    }

    expect(sayHello("Rivan")).toBe("Hello, Rivan");
    expect(sayHello("Rivan", "Fadlani")).toBe("Hello, Rivan Fadlani");
  });

  // Rest Parameter
  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  // Function Overloading
  it("should support function overloading", function () {
    // Overload Signature
    // mendefinisikan tipe data dan return value
    function callMe(value: string): string;
    function callMe(value: number): number;

    // Implementation Signature
    // implementasi
    function callMe(value: any) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      }
    }

    expect(callMe("ripunch")).toBe("RIPUNCH");
    expect(callMe(50)).toBe(100);
  });

  // Function Sebagai Parameter (Callback)
  it("should support function as parameter", function () {
    // deklarasi parameter: string dan function(: string) => string
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    // membuat function yang akan dipanggil di parameter function 'sayHello'
    function toUpperCase(name: string) {
      return name.toUpperCase();
    }

    console.log(sayHello("fern", toUpperCase));

    // memberi argument kepada function sayHello yang parameternya "ripunn" dan function
    expect(sayHello("ripunn", toUpperCase)).toBe("Hello RIPUNN");

    // anonymous function
    expect(
      sayHello("hengker", function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe("Hello HENGKER");

    // arrow function
    expect(
      sayHello("rivan ganteng", (name: string): string => name.toUpperCase()),
    ).toBe("Hello RIVAN GANTENG");
  });
});
