<script setup lang="ts">
  const { id } = defineProps({
    id: {
      type: String,
    },
  });
</script>

<template>
  <div>question: {{ id }}</div>
</template>
