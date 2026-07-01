describe("No Generic", () => {
  class Data {
    public value: any;

    constructor(value: any) {
      this.value = value;
    }
  }

  it("should accept all data type", () => {
    const data = new Data("ripunn");
    // tidak akan terdeteksi error pada saat proses compile code (tsc)
    // * data.value = 100;

    console.log(data.value.toUpperCase());
  });
});
