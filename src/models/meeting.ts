import { MeetingFlow } from './meeting-flow';
import { MeetingStatus } from './meeting-status';
import { Voting } from './voting';

export interface Meeting {
  id: string;
  createdAt: string;
  status: MeetingStatus;
  flow: MeetingFlow;
  name: string;
  beginsAt: string;
  endsAt: string;
  beganAt: string | null;
  endedAt: string | null;
  agenda: Voting[];
}
