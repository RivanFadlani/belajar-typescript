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

  // While Loop
  it("should support while loop", function () {
    let counter: number = 0;

    while (counter < 10) {
      console.log("Perulangan ke-", counter);
      counter++;
    }
  });

  // Do While Loop
  it("should support do while loop", function () {
    let counter = 0;

    do {
      console.log("Looping ke-", counter);
      counter++;
    } while (counter < 10);
  });

  // Break and Countinue
  it("should support break and continue", function () {
    let counter = 0;

    do {
      counter++;

      // counter === 10, berhenti
      if (counter === 10) {
        break;
      }

      // kalau counter hasil sisa baginya === 0, lanjut ke loop selanjutnya
      if (counter % 2 === 0) {
        continue;
      }

      console.log("Yang Ganjil Ajah: ", counter);
    } while (true); // perulangan akan dilakukan sampai (if dengan blok break tertrigger)
  });
});
