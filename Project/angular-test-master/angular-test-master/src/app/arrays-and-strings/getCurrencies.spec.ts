import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
  it("Should return the currenies", () => {
    const result = getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("EUR");
    expect(result).toContain("KSH");
  });
});
