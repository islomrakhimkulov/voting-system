import { BallotPaper } from './ballot-paper';
import { Issue } from './issue';
import { OrderedVotingOption } from './ordered-voting-option';
import { VotingResult } from './voting-result';
import { VotingStatus } from './voting-status';

export interface Voting {
  id: string;
  createdAt: string;
  status: VotingStatus;
  order: number;
  issue: Issue;
  interval: string | null;
  options: OrderedVotingOption[];
  startedAt: string;
  endedAt: string | null;
  ballots: BallotPaper[];
  result: VotingResult | null;
}
