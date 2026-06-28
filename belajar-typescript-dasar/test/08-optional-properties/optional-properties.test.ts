import { describe, it } from "vitest";
import type { Book } from "../../src/08-optional-properties/optional-properties";

describe("Optional Properties", function () {
  it("should support in typescript", function () {
    // di Type Alias
    const book: Book = {
      id: "1",
      title: "atomic habits",
      price: 150,
      // description?: string * Optional Properties
    };

    console.log(book);

    // di Object Type
    const person: { name: string; age: number; hobbies?: string[] } = {
      name: "ripunn",
      age: 18,
      // hobbies?: string[]
    };

    console.log(person);
  });
});
