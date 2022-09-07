<script lang="ts">
  import { VotingOptionPolarity } from '@/models/voting-option-polarity';

  const POLARITY_TO_COLOR_MAP: { [polarity: string]: string } = {
    [VotingOptionPolarity.UNKNOWN]: 'default',
    [VotingOptionPolarity.POSITIVE]: 'success',
    [VotingOptionPolarity.NEGATIVE]: 'danger',
    [VotingOptionPolarity.NEUTRAL]: 'warning',
  };
</script>

<script setup lang="ts">
  import type { OrderedVotingOption } from '@/models/ordered-voting-option';

  interface Props {
    option: OrderedVotingOption;
    active?: boolean;
  }

  const { option } = defineProps<Props>();

  const buttonColor = computed(
    () => POLARITY_TO_COLOR_MAP[option.polarity] ?? 'default'
  );
</script>

<template>
  <div>
    <AppButton :color="buttonColor">{{ option.option }}</AppButton>
  </div>
</template>
