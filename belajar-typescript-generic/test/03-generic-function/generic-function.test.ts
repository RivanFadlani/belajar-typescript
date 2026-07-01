describe("Generic Function", () => {
  function sayIt<T>(value: T): T {
    return value;
  }

  it("should support generic function", () => {
    const sayItString: string = sayIt<string>("ripunn");
    console.log("say it:", sayItString);
    expect(sayItString).toBe("ripunn");

    const sayItNumber: number = sayIt<number>(67);
    console.log("say it:", sayItNumber);
    expect(sayItNumber).toBe(67);
  });
});
