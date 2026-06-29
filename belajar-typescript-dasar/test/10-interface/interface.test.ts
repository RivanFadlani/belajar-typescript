import { describe, it } from "vitest";
import type { Seller } from "../../src/10-interface/interface";

describe("Interface", function () {
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
});
