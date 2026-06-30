describe("Interface Implements", function () {
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  class Person implements HasName, CanSayHello {
    name: string; // property name dari interface HasName

    constructor(name: string) {
      this.name = name;
    }

    // function sayHello dari interface CanSayHello
    sayHello(name: string): void {
      console.log(`Hello ${name}! my name is ${this.name}`);
    }
  }

  it("should support interface Implements", function () {
    const person = new Person("ripunn");
    person.sayHello("fern");
  });
});
