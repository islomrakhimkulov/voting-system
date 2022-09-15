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

  const hours = computed(() => (props.hours ? toTimePart(props.hours) : '00'));
  const minutes = computed(() =>
    props.minutes ? toTimePart(props.minutes) : '00'
  );
  const seconds = computed(() =>
    props.seconds ? toTimePart(props.seconds) : '00'
  );
</script>

<template>
  <div
    class="app-timer flex text-[44px] font-semibold text-gray-900 justify-center"
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
