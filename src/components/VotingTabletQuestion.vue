<script setup lang="ts">
  const { questions } = defineProps({
    question: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="text-gray-900">
        <!-- about subject title -->
        <span class="text-[14px] uppercase">
          {{ question.id }} - ovozga qo'yilgan mavzu
        </span>

        <!-- subject title content -->
        <h2 class="text-[20px] py-2 font-semibold">
          {{ question.title }}
        </h2>

        <!-- subject content info -->
        <p class="text-[16px] pb-4">{{ question.text }}</p>
      </div>

      <div class="absolute bottom-5">
        <!-- next prev buttons -->
        <div class="flex justify-between items-center gap-[500px] pt-5">
          <AppButton size="small" color="disabled">orqaga</AppButton>
          <AppButton size="small" color="next">keyingi</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>
