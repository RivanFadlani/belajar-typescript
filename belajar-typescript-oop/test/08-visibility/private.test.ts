describe("Private Visibility", function () {
  class Counter {
    // private: hanya bisa diakses di dalam class ini sendiri,
    // bisa melalui perantara method yang berada di class terkait
    // dengan syarat method perantara tersebut memiliki akses public jika diakses ingin diakses di luar class ini
    private counter: number = 0;

    // * tetap bisa menggunakan constructor untuk menerima argument dari instance baru

    // secara default, bila method tidak diberi visibilty, maka method otomatis akan memiliki visibilty public
    public increament(): void {
      this.counter++;
    }

    // memanggil field private yang bisa diakses di dalam class
    // salah satunya method getCounter() ini
    public getCounter(): number {
      return this.counter;
    }
  }

  it("should support private", function () {
    const counter: Counter = new Counter();
    counter.increament(); // method public yang di dalamnya memanggil field private
    counter.increament();
    counter.increament();
    console.log("Increament + 3 =", counter.getCounter());
  });
});
