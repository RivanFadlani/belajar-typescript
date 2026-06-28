import { describe, it } from "vitest";

describe("Data Type", function () {
  it("should must declare", function () {
    // membuat variable dengan implicit data type
    let myName = "Rivan Fadlani";
    myName = "ripunn"; // kalau ingin declare ulang, value data typenya harus sama

    // membuat variable dengan explicit data type
    const name: string = "Rivan Fadlani";
    const balance: number = 1000000;
    const isVip: boolean = true;

    console.log(myName);

    console.log(name);
    console.log(balance);
    console.log(isVip);
  });
});
