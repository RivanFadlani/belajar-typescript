describe("Generic Data", () => {
  // cukup gunakan <> (diamond) untuk deklarasi generic class
  class GenericData<T> {
    public value: T;

    constructor(value: T) {
      this.value = value;
    }

    // bisa juga membuat generic function di class
    // asalkan pada class sudah dideklarasikan 'GenericClass<T>'
    get(): T {
      return this.value;
    }

    set(value: T) {
      this.value = value;
    }
  }

  it("should support multiple data type", () => {
    const data = new GenericData<number>(100);
    // data.value = "ripunn" // langsung terdetect error, karena value !== number
    // data.value = true // error
    expect(data.value * 2).toBe(200);

    // tipe data bisa diubah
    const dataString = new GenericData<string>("ripunn");
    // dataString.value = 200; // error
    // dataString.value = true // error
    expect(dataString.value.toUpperCase()).toBe("RIPUNN");
  });
});
