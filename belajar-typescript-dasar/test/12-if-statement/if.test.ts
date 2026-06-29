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

  // Ternary Operator
  it("should support ternary operator", function () {
    const score = 88;
    const say = score >= 80 ? "Congratulation" : "Git Gud";

    console.log(say);
  });

  // Switch Case
  it("should support switch case", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "ripunn":
          return "Hello alter ego";
        case "rivan":
          return "Hello orang asli";
        default:
          return `Hahh?! ${name}?`;
      }
    }

    console.log(sayHello("ripunn"));
    console.log(sayHello("rivan"));
    console.log(sayHello("lolok"));
  });
});
