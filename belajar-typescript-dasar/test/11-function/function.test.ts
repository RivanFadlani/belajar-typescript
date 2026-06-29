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
});
