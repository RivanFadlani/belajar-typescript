```typescript
describe("Parameter Properties", function () {
  // secara default, lint tidak mengaktifkan cara deklarasi parameter properties ini karena alasan keterbacaan
  class Person {
    constructor(public name: string) {}
  }

  it("should support parameter properties", function () {
    const person = new Person("ripunn");
    console.log(person.name);
  });
});
```
