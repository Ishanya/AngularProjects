import { compute } from "./compute";

// describe() - used to define test suite
// it() - defines spec or test

// name is name of function being tested - standard
describe("compute", () => {
  it("should return 0 if input is negative", () => {
    const result = compute(-1);

    // assert
    expect(result).toBe(0);
  });

  it("should increment the input if it is positive", () => {
    const result = compute(1);

    // assert
    expect(result).toBe(2);
  });
});
