describe("Generic Collectible", () => {
  // array
  it("should support array", () => {
    // <T>
    const array = new Array<string>();
    array.push("ripunn");
    array.push("keren");

    console.log(array);

    expect(array[0]).toBe("ripunn");
    expect(array[1]).toBe("keren");
  });

  // set
  it("should support set", () => {
    // <T>
    const set = new Set<string>();
    set.add("rivan");
    set.add("keren");
    set.add("rivan");

    expect(set.size).toBe(2); // karena map adalah data collection yang unique (tidak menerima duplikasi)
    expect(set.has("rivan")).toBe(true);
    expect(set.has("keren")).toBe(true);
  });

  // map
  it("should support map", () => {
    // <K, V>
    const map = new Map<string, number>();
    map.set("matematika", 88);
    map.set("indonesia", 97);
    map.set("ipa", 85);

    expect(map.get("matematika")).toBe(88);
    expect(map.get("indonesia")).toBe(97);
    expect(map.get("ipa")).toBe(85);
  });
});
