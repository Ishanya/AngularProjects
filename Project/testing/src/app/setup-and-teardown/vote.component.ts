export class VoteComponent {
  totalVotes = 0;

  downVote() {
    return this.totalVotes--;
  }

  upVote() {
    return this.totalVotes++;
  }
}
