describe("Instance Of", function () {
  class Employee {}
  class Manager {}

  const employee = new Employee();
  const manager = new Manager();

  // cara yang salah untuk mengetahui instance object dari class mana
  it("should have problem using typeof", function () {
    console.log(typeof employee); // object
    console.log(typeof manager);
  });

  // cara yang benar untuk mengetahui instance object dari class mana
  it("should support instanceof", function () {
    expect(employee instanceof Employee).toBe(true); // true
    expect(employee instanceof Manager).toBe(false); // false

    expect(manager instanceof Employee).toBe(false); // false
    expect(manager instanceof Manager).toBe(true); // true
  });
});
