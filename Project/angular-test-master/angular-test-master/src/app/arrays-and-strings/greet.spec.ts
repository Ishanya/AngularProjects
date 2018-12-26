import { greet } from "./greet";
describe("greet", () => {
  it("Expect greeting of person", () => {
    expect(greet("Sheila")).toContain("Sheila");
  });
});
