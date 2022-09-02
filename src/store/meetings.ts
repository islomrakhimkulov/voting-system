import { Meeting } from '@/models/meeting';
import { MeetingFlow } from '@/models/meeting-flow';
import { MeetingStatus } from '@/models/meeting-status';
import { VotingStatus } from '@/models/voting-status';
import { defineStore } from 'pinia';

export const useMeetingsStore = defineStore('meetings', () => {
  const currentMeeting = ref<Meeting | undefined>();

  async function fetchCurrentMeeting(): Promise<void> {
    currentMeeting.value = {
      id: '09282221-e60c-417c-8daf-70c7c79f50ce',
      createdAt: '2022-09-01T10:00:00Z',
      status: MeetingStatus.IN_PROCESS,
      flow: MeetingFlow.VOLUNTARY,
      name: 'XIX Oliy Majlis Qonunchilik palatasining navbatdagi yalpi majlisi',
      beginsAt: '2022-09-01T10:30:00Z',
      endsAt: '2022-09-01T12:30:00Z',
      beganAt: '2022-09-01T10:30:00Z',
      endedAt: null,
      agenda: [
        {
          id: '67c2f435-6987-424e-864c-a2f6ac6d7281',
          createdAt: '2022-09-01T10:01:00Z',
          status: VotingStatus.ENDED,
          order: 1,
          issue: {
            subject: 'Lorem',
            description: 'Lorem',
          },
          interval: null,
          options: [
            {
              order: 1,
              option: 'Yes',
            },
            {
              order: 2,
              option: 'No',
            },
          ],
          startedAt: '2022-09-01T10:30:00Z',
          endedAt: null,
          ballots: [],
          result: null,
        },
        {
          id: '77c2f435-6987-424e-864c-a2f6ac6d7281',
          createdAt: '2022-09-01T10:01:00Z',
          status: VotingStatus.IN_PROCESS,
          order: 2,
          issue: {
            subject: 'Lorem',
            description: 'Lorem',
          },
          interval: null,
          options: [
            {
              order: 1,
              option: 'Yes',
            },
            {
              order: 2,
              option: 'No',
            },
          ],
          startedAt: '2022-09-01T10:30:00Z',
          endedAt: null,
          ballots: [],
          result: null,
        },
        {
          id: '87c2f435-6987-424e-864c-a2f6ac6d7281',
          createdAt: '2022-09-01T10:01:00Z',
          status: VotingStatus.PENDING,
          order: 3,
          issue: {
            subject: 'Lorem',
            description: 'Lorem',
          },
          interval: null,
          options: [
            {
              order: 1,
              option: 'Yes',
            },
            {
              order: 2,
              option: 'No',
            },
          ],
          startedAt: '2022-09-01T10:30:00Z',
          endedAt: null,
          ballots: [],
          result: null,
        },
        {
          id: '97c2f435-6987-424e-864c-a2f6ac6d7281',
          createdAt: '2022-09-01T10:01:00Z',
          status: VotingStatus.IN_PROCESS,
          order: 4,
          issue: {
            subject: 'Lorem',
            description: 'Lorem',
          },
          interval: null,
          options: [
            {
              order: 1,
              option: 'Yes',
            },
            {
              order: 2,
              option: 'No',
            },
          ],
          startedAt: '2022-09-01T10:30:00Z',
          endedAt: null,
          ballots: [],
          result: null,
        },
        {
          id: 'a7c2f435-6987-424e-864c-a2f6ac6d7281',
          createdAt: '2022-09-01T10:01:00Z',
          status: VotingStatus.IN_PROCESS,
          order: 5,
          issue: {
            subject: 'Lorem',
            description: 'Lorem',
          },
          interval: null,
          options: [
            {
              order: 1,
              option: 'Yes',
            },
            {
              order: 2,
              option: 'No',
            },
          ],
          startedAt: '2022-09-01T10:30:00Z',
          endedAt: null,
          ballots: [],
          result: null,
        },
      ],
    };
  }

  return { currentMeeting, fetchCurrentMeeting };
});
