describe("Protected Visibility", function () {
  class Counter {
    // protected: hanya bisa diakses di dalam class ini sendiri dan class childnya
    // bisa melalui perantara method yang berada di class terkait dan class child
    // dengan syarat method perantara tersebut memiliki akses public jika diakses ingin diakses di luar class ini
    protected counter: number = 0;

    // * tetap bisa menggunakan constructor untuk menerima argument dari instance baru

    public increament(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    // bisa akses field yang protected di parent
    // karena class DoubleCounter adalah child dari parent Counter
    public increament() {
      this.counter += 2;
    }
  }

  it("should support protected", function () {
    const doubleCounter: DoubleCounter = new DoubleCounter();
    doubleCounter.increament();
    doubleCounter.increament();
    doubleCounter.increament();
    console.log("Double Counter =", doubleCounter.getCounter());
  });
});
