import { describe, it, expect } from "vitest";

describe("Union Type", function () {
  it("should support in typescript", function () {
    // TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya
    let sample: string | number | boolean = "ripunn";
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);
  });

  it("should support typeof operator", function () {
    // hati-hati bila memanggil method terhadap variable union type, karena variable bisa berubah-ubah
    // maka, ada baiknya kita melakukan pengecekan tipe data dulu menggunakan typeof
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("ripunn")).toBe("RIPUNN");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
