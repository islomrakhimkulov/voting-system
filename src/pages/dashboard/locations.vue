<script setup lang="ts">
  const roomData = ref([
    { name: '304-xona', status: 'band', count: 34 },
    { name: '304-xona', status: 'band emas', count: 12 },
    { name: '304-xona', status: 'band', count: 3 },
    { name: '304-xona', status: 'band emas', count: 14 },
    { name: '304-xona', status: 'band emas', count: 7 },
  ]);
</script>

<template>
  <div class="container mx-auto py-4">
    <div>
      <h2 class="text-[16px] text-gray-900 uppercase mb-4">Xonalar</h2>

      <div
        class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <template v-for="item in roomData" :key="item">
          <MeetingLocation :item="item" class="basis-1/4" />
        </template>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>
