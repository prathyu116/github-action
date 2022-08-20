/** @format */
const { capitaliseName, multiplyBy2, multiplyBy3, multiplyBy4 } = require("./app");

describe("Sample tests", () => {
  test("Multiply by 2", () => {
    const result = multiplyBy2(10);
    expect(result).toBe(20);
  });

  test("Multiply by 3", () => {
    const result = multiplyBy3(10);
    expect(result).toBe(30);
  });

  test("Multiply by 4", () => {
    const result = multiplyBy4(10);
    expect(result).toBe(40);
  });

  test("Capitalise name", () => {
    const result = capitaliseName("yash");
    expect(result).toBe("Yash");
  });
});
