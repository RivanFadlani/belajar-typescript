import { describe, it } from "vitest";

describe("Loop", function () {
  // For Loop
  it("should support for i", function () {
    const fruits: string[] = [
      "guava",
      "banana",
      "watermelon",
      "starfruit",
      "avocado",
    ];

    // for i
    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      console.log("for i: ", fruit);
    }

    // for of
    for (const fruit of fruits) {
      console.log("for of: ", fruit);
    }

    // for in
    for (const index in fruits) {
      const fruit = fruits[index];
      console.log("for in: ", fruit);
    }
  });
});
