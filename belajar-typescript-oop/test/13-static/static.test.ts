describe("Static", function () {
  // ===
  // Static Member (field dan method), tidak bisa akses Non-Static Member, tapi
  // Non-Static Member bisa akses Static Member
  // ===

  // static banyak digunakan di utility class
  // yang di mana, satu class berisi static field atau static method saja
  class Configuration {
    // bisa diakses langsung tanpa berkaitan dengan instance object
    // biasanya nama dari field static ditulis uppercase semua

    // Static Field
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Eko Kurniawan Khannedy";
  }

  class MathUtil {
    // Static Method
    static sum(...values: number[]): number {
      let total: number = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support static field", function () {
    // bisa langsung memanggil field tanpa harus membuat instance baru
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });

  it("should support static method", function () {
    console.log(MathUtil.sum(1, 2, 3, 4, 5)); // 15
  });
});
