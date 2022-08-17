<script setup lang="ts">
  import Draggable from 'vuedraggable';

  const emits = defineEmits(['update:devices']);
  const props = defineProps({
    devices: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: 'Guruhlashtirilgan qurilamalar',
    },
    color: {
      type: String,
      default: () => 'default',
    },
    itemDraggable: {
      type: Boolean,
      default: () => false,
    },
    draggableGroup: {
      type: String,
      default: () => 'default',
    },
  });

  const devices = toRef(props, 'devices');

  const changeBackground = computed(() => {
    if (devices.value.length === 0) {
      return 'empty-group';
    }

    return 'group';
  });

  const onDraggableValueChanged = (value: Array) => {
    emits('update:devices', value);
  };
</script>

<template>
  <div class="h-full">
    <h2 class="text-[16px] font-semibold uppercase">
      {{ name }}
    </h2>
    <!-- card group-->
    <div class="py- 2" :class="changeBackground">
      <!-- cards list -->
      <draggable
        :modelValue="devices"
        @update:modelValue="onDraggableValueChanged"
        class="w-full flex flex-row items-center flex-wrap gap-2"
        :group="draggableGroup"
        item-key="id"
        ghost-class="ghost"
        animation="500"
      >
        <template #item="{ element }">
          <VotingDeviceCard :device="element" :color="color"></VotingDeviceCard>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style lang="postcss">
  .ghost {
    @apply bg-success-100 z-10 text-white cursor-move h-full w-[200px];
  }
  .empty-group {
    @apply bg-gray-30 mt-1 w-full h-[470px] rounded-lg;
  }
  .hasItem {
    @apply bg-danger-200 w-full h-full;
  }
</style>
