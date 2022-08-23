<script setup lang="ts">
  import EditIcon from '@/assets/icons/edit.svg?raw';
  import DeleteIcon from '@/assets/icons/delete.svg?raw';
  const { unNamedCard, color } = defineProps({
    unNamedCard: {
      type: Object,
      defualt: () => ({}),
    },
    color: {
      type: String,
      defualt: () => 'default',
      validator: (value: string) => ['default', 'success'].includes(value),
    },
  });

  const emits = defineEmits(['delete']);
  const deleteItem = () => {
    emits('delete');
  };

  const classes = computed(() => {
    return {
      [`is-${color}`]: true,
    };
  });
</script>
<template>
  <div
    class="w-[270px] p-2 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg app-card"
    :class="classes"
  >
    <div class="text-right">
      <AppButton size="small" color="transparent">
        <AppIcon v-html="EditIcon" size="small"></AppIcon>
      </AppButton>
      <AppButton size="small" color="transparent">
        <AppIcon @click="deleteItem" v-html="DeleteIcon" size="small"></AppIcon>
      </AppButton>
    </div>
    <div class="flex flex-col items-center">
      <img src="@/assets/phone-tablet.svg" alt="" />
      <!-- group name -->
      <h2 class="text-[14px] font-semibold">{{ unNamedCard.name }}</h2>
    </div>
    <!-- group status-->
    <p class="text-[14px] text-right">{{ unNamedCard.status }}</p>
  </div>
</template>

<style lang="postcss">
  .app-card.is-default {
    @apply bg-gray-30 text-gray-70 border-gray-70;
  }
  .app-card.is-success {
  }
</style>
