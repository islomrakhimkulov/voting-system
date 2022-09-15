<script setup lang="ts">
  import { useMeetingsStore } from '@/store/meetings';
  import type { Voting } from '@/models/voting';
  import { VotingStatus } from '@/models/voting-status';

  const props = defineProps({
    id: String,
  });

  const meetings = useMeetingsStore();

  const currentVoting = computed<Voting | undefined>(() => {
    if (!meetings.currentMeeting || !props.id) {
      return undefined;
    }

    return meetings.currentMeeting.agenda.find(item => item.id === props.id);
  });

  const isInProcess = computed(
    () => currentVoting.value?.status === VotingStatus.IN_PROCESS
  );

  const isEnded = computed(
    () => currentVoting.value?.status === VotingStatus.ENDED
  );

  const previousVoting = computed(() => {
    if (!meetings.currentMeeting || !currentVoting.value) {
      return;
    }

    return meetings.currentMeeting.agenda.find(
      item => currentVoting.value.order - 1 === item.order
    );
  });

  const nextVoting = computed(() => {
    if (!meetings.currentMeeting || !currentVoting.value) {
      return;
    }

    return meetings.currentMeeting.agenda.find(
      item => currentVoting.value.order + 1 === item.order
    );
  });

  const toPreviousVoting = computed(() => {
    if (!previousVoting.value) {
      return;
    }

    return {
      name: 'voting-device-vote-id',
      params: {
        id: previousVoting.value.id,
      },
    };
  });

  const toNextVoting = computed(() => {
    if (!nextVoting.value) {
      return;
    }

    return {
      name: 'voting-device-vote-id',
      params: {
        id: nextVoting.value.id,
      },
    };
  });

  onBeforeMount(meetings.fetchCurrentMeeting);
</script>

<template>
  <div class="pl-6">
    <!-- subject content here -->
    <div class="">
      <div class="py-2 text-gray-900">
        <!-- about subject title -->
        <span class="text-[14px] uppercase">
          {{ currentVoting.order }} - ovozga qo'yilgan mavzu
        </span>

        <!-- subject title content -->
        <h2 class="text-[20px] font-semibold">
          {{ currentVoting.issue.subject }}
        </h2>

        <!-- subject content info -->
        <p class="text-[16px] pb-2">{{ currentVoting.issue.description }}</p>
      </div>

      <div>
        <div>
          <!-- vaqt -->
          <template v-if="isInProcess">
            <div>
              <AppTimer />
            </div>
          </template>

          <!-- ovoz berganlar -->
          <template v-if="isInProcess || isEnded">
            <h2 class="text-[14px] text-gray-900 uppercase">
              Ovoz berish jarayoni
            </h2>
            <div class="float-left">
              <VotesCountChart style="width: 300px" />
            </div>
          </template>

          <!--  -->

          <!-- buttons(knopkalar) -->
          <template v-if="isInProcess">
            <div class="flex justify-center items-center gap-5">
              <template
                v-for="option in currentVoting.options"
                :key="option.value"
              >
                <VotingOptionButton :option="option" />
              </template>
            </div>
          </template>

          <!-- guruhlangan chartlar -->
          <template v-if="isEnded">
            <div class="flex justify-center items-center">
              <GroupedVotingResultChart style="width: 350px" />
            </div>
          </template>
        </div>

        <div class="absolute bottom-5">
          <!-- next prev buttons -->
          <div class="flex justify-around items-center gap-[40px] pt-5">
            <div>
              <AppButton size="small" v-if="toPreviousVoting">
                <router-link :to="toPreviousVoting">Orqaga</router-link>
              </AppButton>
            </div>

            <div>
              <AppButton size="small" v-if="toNextVoting">
                <router-link :to="toNextVoting">Keyingi</router-link>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: voting-device
</route>
