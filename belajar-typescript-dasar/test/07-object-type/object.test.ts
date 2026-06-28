import { describe, it } from "vitest";

describe("Object Type", function () {
  it("should support in typescript", function () {
    // cocok digunakan jika kasusnya sederhana
    // tapi kalau type annotation ingin digunakan berkali' di banyak file atau -
    // type annotation-nya banyak, lebih baik gunakan type alias saja
    const person: { id: string; name: string } = {
      id: "1",
      name: "rivan",
    };

    console.log(person);

    // bisa diubah
    person.id = "2";
    person.name = "rivan";
    // tapi kalau untuk menambah property tidak bisa. karena sudah ditentukan
    // person.description = "pengen berak"
  });
});
