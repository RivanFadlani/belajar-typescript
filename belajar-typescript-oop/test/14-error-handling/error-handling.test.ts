describe("Error Handling", function () {
  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
    }
  }

  function doubleIt(value: number) {
    if (value < 0) {
      throw new ValidationError("Value gak bisa kurang dari 0");
    }
    return value * 2;
  }

  it("should support try catch", function () {
    try {
      const result = doubleIt(-1);
      // kalau berhasil
      console.log(result);
    } catch (e) {
      // kalau error
      if (e instanceof ValidationError) {
        console.log(e.message);
      }
    }
  });
});
