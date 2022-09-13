<script setup lang="ts">
  import { watchEffect, onMounted } from 'vue';
  import { useTimer } from 'vue-timer-hook';

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); //10 minutes timer

  const timer = useTimer(time);
  const restartFive = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    timer.restart(time);
  };

  const startTimer = () => {
    console.log(timer.start());
  };
  onMounted(() => {
    watchEffect(async () => {
      if (timer.isExpired.value) {
        console.warn('isExpered');
      }
    });
  });
</script>

<template>
  <div
    class="app-timer flex text-[44px] font-semibold text-gray-900 justify-center rounded bg-yellow-100 p-3"
  >
    <p>{{ timer.isRunning ? 'Running' : 'Not running' }}</p>
    <div class="hours mx-2 relative">
      {{ timer.hours }}
      <div class="text-sm ml-2 timer-indicator">soat</div>
    </div>

    <span class="leading-snug">:</span>
    <div class="minutes mx-2 relative">
      {{ timer.minutes }}
      <div class="text-sm timer-indicator">daqiqa</div>
    </div>

    <span class="leading-snug">:</span>
    <div class="seconds ml-2 relative">
      {{ timer.seconds }}
      <div class="text-sm timer-indicator">soniya</div>
    </div>
    <div class="flex items-center">
      <AppButton @click="startTimer()" color="primary">Start</AppButton>
      <AppButton @click="timer.pause()" color="warning ">Pause</AppButton>
      <AppButton @click="restartFive()" color="danger">Restart</AppButton>
    </div>
  </div>
</template>
