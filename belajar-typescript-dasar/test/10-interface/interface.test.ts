import { describe, it, expect } from "vitest";
import type { Seller } from "../../src/10-interface/interface";

describe("Interface", function () {
  // Interface
  it("should support Interface in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Mamat Gun Shop",
      // address?: string,
      nib: "290712346", // read-only property
      npwp: "892134922", // read-only property
      // readonly type?: string
    };

    seller.name = "Farhan Kebab"; // bisa diubah karena tidak read-only
    // seller.nib = "892134922" * tidak bisa diubah karena property bersifat read-only

    console.log(seller);
  });

  // Function Interface
  it("should support function interface in typescript", function () {
    interface AddFunction {
      //         parameter      ----    return
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number) => {
      return value1 + value2;
    };
    // kalau di javascript sama saja seperti ini:
    // const add = () => { return value1 + value2 }

    expect(add(2, 2)).toBe(4);
  });
});
