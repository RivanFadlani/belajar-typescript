import { describe, it } from "vitest";

describe("If Statement", function () {
  // If Statement
  it("should support in typescript", function () {
    let examValue = 90;

    if (examValue > 80) {
      console.log("Gud Job");
    } else if (examValue > 60) {
      console.log("Not Bad");
    } else {
      console.log("Git Gud");
    }
  });
});
