import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
  // Arrange
  let component: VoteComponent;

  // to ensure code isn't fragile, instantiate class before each call
  beforeEach(() => {
    component = new VoteComponent();
    component.totalVotes=10;
  });

  // clean up done in afterEach(() => {})

  it("Increment total vote count", () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(11);
  });

  it("Decrease total vote count", () => {
    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(9);
  });
});
