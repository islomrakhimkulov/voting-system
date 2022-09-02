<script setup lang="ts">
  import type { Voting } from '@/models/voting';

  interface Props {
    items: Voting[];
    activeId?: string;
  }

  const { items, activeId } = defineProps<Props>();
</script>

<template>
  <div>
    <template v-for="voting in items" :key="voting.id">
      <NumberedVotingListItem
        :voting="voting"
        :active="voting.id === activeId"
      />
    </template>
  </div>
</template>
