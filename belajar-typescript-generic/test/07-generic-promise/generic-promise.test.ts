describe("Generic Promise", () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "ripunn") {
          resolve("Hello " + value);
        } else {
          reject("Not Found");
        }
      }, 1000);
    });
  }

  it("should support generic promise", async () => {
    // const result = await fetchData("ripunn");
    // expect(result).toBe("Hello ripunn");

    try {
      await fetchData("ripunn");
    } catch (e) {
      expect(e).toBe("Not Found");
      console.log("=== 404: Not Found ===");
    }
  });
});
