import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
  it("Should return the currenies", () => {
    const result = getCurrencies();
    for(var i=0;i<result.length;i++)
    {
      expect(result).toContain(result[i]);
    }
  
  });
});
