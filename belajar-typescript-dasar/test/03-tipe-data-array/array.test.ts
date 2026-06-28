import { describe, it } from "vitest";

describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["rivan", "ripunn", "riven"];
    const values: number[] = [1, 2, 3, 4, 5];

    console.log(names);
    console.log(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["gaming", "coding", "membaca"];
    console.log(hobbies);
    console.log(hobbies[0]);
    console.log(hobbies[1]);

    // * ERROR! ReadonlyArray<> hanya bisa dibaca
    // hobbies[0] = "main";
  });

  it("should support tupple", function () {
    // tupple: tipe data array yang panjang dan tipe data di tiap indexnya sudah ditentukan
    const person: readonly [string, string, number] = ["rivan", "fadlani", 100]; // bisa readonly bisa juga tidak
    console.log(person);
    console.log(person[0]);
    console.log(person[1]);
    console.log(person[2]);
  });
});
