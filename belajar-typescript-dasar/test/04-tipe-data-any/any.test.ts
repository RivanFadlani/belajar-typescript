import { describe, it } from "vitest";

describe("Any", function () {
  it("should support in typescript", function () {
    // bebas memakai tipe data apa saja
    const person: any = {
      id: 1,
      name: "Rivan Fadlani",
      age: 18,
    };

    person.age = "eighteen";
    person.address = "Indonesia";

    console.log(person);
  });
});
