describe("Multiple Generic Type", () => {
  class Entry<K, V> {
    public key: K;
    public value: V;

    constructor(key: K, value: V) {
      this.key = key;
      this.value = value;
    }
  }

  class Triple<K, V, T> {
    public key: K;
    public value: V;
    public third: T;

    constructor(key: K, value: V, third: T) {
      this.key = key;
      this.value = value;
      this.third = third;
    }
  }

  it("should support multiple generic type", () => {
    const entry = new Entry<number, string>(1, "ripunn");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("ripunn");

    const triple = new Triple<number, string, boolean>(2, "ripunn", true);
    expect(triple.key).toBe(2);
    expect(triple.value).toBe("ripunn");
    expect(triple.third).toBe(true);
  });

  // Optional Generic Type
  it("should support optional generic type", () => {
    /*
     * generic type mendukung agar field yang ada generic type pada class tidak perlu explicit disebut data type-nya
     * ketika membuat instance object
     * */
    // selama field/property ada di dalam constructor

    // tidak perlu explicit sebutkan 'new Entry<number, string>()'
    const entry = new Entry(1, "ripunn");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("ripunn");
  });

  // Generic Parameter Default
  // <T = string>
  class simpleGeneric<T = string> {
    private value?: T;

    getValue(): T | undefined {
      return this.value;
    }

    setValue(value: T) {
      this.value = value;
    }
  }

  it("should have problem non-constructor generic type", () => {
    // * default <T> = string
    // jika tipe data tidak dideklarasikan pada instance object, maka tipe data akan sama saja seperti 'Any'
    const simple = new simpleGeneric();
    // di bawah ini akan diproses semua ke expect
    // karena ada method toUpperCase(). maka expect hanya menerima string saja
    // jadi kita perlu deklarasi tipe data pada generic untuk memfilter hanya yang tipe data string saja yang bisa diproses
    simple.setValue("ripunn");
    // simple.setValue(100);
    // simple.setValue(true);

    expect(simple.getValue()!.toUpperCase()).toBe("RIPUNN");
  });
});
