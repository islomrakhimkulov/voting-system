<script setup lang="ts">
  import type { Voting } from '@/models/voting';

  interface Props {
    voting: Voting;
    active?: boolean;
  }

  const { voting, active = false } = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="{ name: 'voting-device-vote-id', params: { id: voting.id } }"
    custom
    v-slot="{ isActive, navigate }"
  >
    <div
      class="p-3 my-2 bg-white rounded-md shadow voting-list-item"
      :class="{ active: isActive }"
      @click="navigate"
    >
      <div class="flex items-center">
        <div>
          <div
            class="w-[50px] h-[50px] circle bg-gray-55 text-[20px] text-gray-900 rounded-full flex items-center justify-center circle"
          >
            {{ voting.order }}
          </div>
        </div>
        <div class="pl-4 text-[15px] line-clamp-2">
          {{ voting.issue.subject }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="postcss">
  .voting-list-item.active {
    @apply bg-primary-300  text-white !important;
  }

  .voting-list-item.active .circle {
    @apply bg-white text-black;
  }
</style>
