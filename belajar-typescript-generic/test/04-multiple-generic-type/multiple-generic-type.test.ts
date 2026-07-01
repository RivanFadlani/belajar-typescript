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
});
