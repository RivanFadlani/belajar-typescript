describe("Getter Setter", function () {
  class Category {
    _name?: string; // _name, untuk pembeda antara nama field dengan getter dan setter

    get name(): string {
      if (this._name) {
        return this._name; // jika ada field name yang terisis, kembalikan valuenya
      } else {
        return "no name"; // jika tidak ada, kembalikan string "no name"
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
      // karena tidak ada else, maka jika value === "" kode akan membuat nilai yang lama utuh
      // karena memang di instance object ini, name tidak menerima setter baru, makanya nilai tetap menggunakan nilai yang lama
    }
  }

  // Getter and Setter
  it("should support getter and setter", function () {
    // instance object new Category()
    const category: Category = new Category();
    console.log(category.name);

    category.name = "drink"; // set name("ripunn")
    console.log(category.name); // get name()

    category.name = ""; // set name("")
    console.log(category.name); // get name()
  });
});
