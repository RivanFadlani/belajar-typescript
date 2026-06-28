import { describe, it } from "vitest";
import type {
  Category,
  FullName,
  Product,
} from "../../src/06-type-alias/type-alias"; // * module

describe("Type Alias", function () {
  it("should support in typescript", function () {
    // membuat alias type yang tipe datanya sudah ditentukan
    const fullName: FullName = "Rivan Fadlani";
    console.log(fullName);

    // type di property harus sama dengan yang ada di module
    // dan harus dipanggil semua kalau type dalam format object
    // type 'Category'
    const category: Category = {
      id: 1, // id: ID = string | number * key dan value harus sama seperti di module
      name: "tech", // name: string
    };

    // type 'Product'
    const product: Product = {
      id: "1", // id: ID = string | number
      name: "Samsung A35 5g", // name: string
      price: 5000000, // price: number
      category: category, // category: type Category
    };

    console.log(category);
    console.log(product);
  });
});
