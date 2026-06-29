import { describe, it } from "vitest";

describe("Optional Parameter", function () {
  it("should support null and undefined in typescript", function () {
    // ingat! null dan undefined adalah 2 tipe data yang berbeda
    // optional parameter secara default memang mengatur nilai boleh diisi/undefined
    // kalau ingin menambahkan null maka, harus tambahkan lagi null sebagai type annotation
    function sayHello(name?: string | null) {
      if (name) {
        console.log(`Hello ${name}`);
      } else {
        console.log("Lah?!");
      }
    }

    const name: string | undefined = undefined;
    sayHello(name);
  });
});
