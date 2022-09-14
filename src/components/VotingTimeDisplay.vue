<script lang="ts" setup>
  interface Props {
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  const props = defineProps<Props>();

  function toTimePart(hms: number) {
    return hms.toString().padStart(2, '0');
  }

  const hours = computed(() => toTimePart(props.hours));
  const minutes = computed(() => toTimePart(props.minutes));
  const seconds = computed(() => toTimePart(props.seconds));
</script>

<template>
  <div
    class="app-timer flex text-[44px] font-semibold text-gray-900 justify-center"
    :class="classes"
  >
    <div class="hours mx-2 relative">
      {{ hours }}
      <div class="text-sm ml-2 timer-indicator">soat</div>
    </div>

    <span class="leading-snug">:</span>
    <div class="minutes mx-2 relative">
      <div>{{ minutes }}</div>
      <div class="text-sm timer-indicator">daqiqa</div>
    </div>

    <span class="leading-snug">:</span>
    <div class="seconds ml-2 relative">
      {{ seconds }}
      <div class="text-sm timer-indicator">soniya</div>
    </div>
  </div>
</template>
