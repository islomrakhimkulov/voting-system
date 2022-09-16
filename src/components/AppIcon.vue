<script lang="ts">
  const SIZES = [
    'default',
    'small',
    'medium',
    'large',
    'extra-large',
    'special',
  ];
</script>

<script setup lang="ts">
  import * as path from '@/utils/path';

  const { color, position, size } = defineProps({
    color: {
      type: String,
      default: () => 'default',
      validator: (value: string) =>
        ['default', 'primary', 'success', 'danger', 'warning'].includes(value),
    },
    position: {
      type: String,
      default: () => 'default',
      validator: (value: string) =>
        ['default', 'left', 'right'].includes(value),
    },
    size: {
      type: String,
      default: () => 'default',
      validator: (value: string) => SIZES.includes(value),
    },
  });

  const classes = computed(() => {
    return {
      'app-icon': true,
      [`is-${color}`]: true,
      [`is-${position}`]: true,
      [`is-${size}`]: true,
    };
  });
</script>

<template>
  <i :class="classes" class="app-icon">
    <slot></slot>
  </i>
</template>

<style lang="postcss">
  .app-icon {
    @apply w-[1em] h-full leading-3;
  }
  .app-icon.is-left {
    @apply mr-2;
  }
  .app-icon.is-right {
    @apply ml-2;
  }
  /* main feature at the bottom */
  .app-icon > svg {
    @apply inline w-[1em] h-[1em] !important;
    @apply align-baseline;
  }
  .app-icon.is-small {
    @apply text-2xl;
  }
  .app-icon.is-medium {
    @apply text-3xl;
  }
  .app-icon.is-large {
    @apply text-4xl;
  }
  .app-icon.is-special {
    @apply text-xl;
  }
  .app-icon.is-primary {
    @apply bg-primary-200 hover:bg-primary-400 text-white;
  }
  .app-icon.is-secondary {
    @apply bg-secondary-200 hover:bg-secondary-400 text-white;
  }
  .app-icon.is-gray {
    @apply bg-gray-200 hover:bg-gray-400 text-black;
  }
  .app-icon.is-success {
    @apply bg-success-200 hover:bg-success-400 text-white;
  }
  .app-icon.is-warning {
    @apply bg-warning-200 hover:bg-warning-400 text-black;
  }
  .app-icon.is-danger {
    @apply bg-danger-400 hover:bg-danger-400 text-white;
  }
</style>
