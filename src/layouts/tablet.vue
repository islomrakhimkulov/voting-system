<script setup lang="ts">
  import { useMeetingsStore } from '@/store/meetings';
  import { useRouter } from 'vue-router';

  const meetings = useMeetingsStore();
  const { currentRoute } = useRouter();
  const currentVotingId = computed(() => currentRoute.value.params.id);

  onBeforeMount(meetings.fetchCurrentMeeting);
</script>

<template>
  <!-- wave background svg icon -->
  <!-- bottom svg -->
  <div
    class="fixed bottom-[-400px] right-[-400px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
  ></div>

  <!-- top svg-->
  <div
    class="fixed top-[-500px] left-[20px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
  ></div>

  <aside>
    <div class="px-5 py-5">
      <!-- Subject title -->
      <h2
        class="pb-4 text-[20px] text-gray-900 uppercase font-semibold leading-6"
      >
        XIX Oliy Majlis Qonunchilik palatasining navbatdagi yalpi majlisi
      </h2>

      <!-- daily tasks title -->
      <h4 class="text-[16px] text-gray-900 uppercase">
        Kun tartibidagi mavzulFar
      </h4>

      <!-- tasks list -->
      <div class="pb-5">
        <NumberedVotingList
          :items="meetings.currentMeeting.agenda"
          :current-id="currentVotingId"
        />
      </div>
    </div>
  </aside>

  <main>
    <router-view />
  </main>
</template>
