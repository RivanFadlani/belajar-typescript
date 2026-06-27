import { describe, expect, it } from "vitest";
import sayHello from "../src/01-say-hello/say-hello"; // kalau file .ts jangan cantumkan extensionnya

describe("Hello", function (): void {
  it("should say hello ripunn", function (): void {
    expect(sayHello("ripunn")).toBe("Hello ripunn");
  });
});
