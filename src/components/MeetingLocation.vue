<script setup lang="ts">
  import DeleteIcon from '@/assets/icons/delete-white.svg?raw';
  import GroupIcon from '@/assets/icons/group-icon.svg?raw';

  const { item } = defineProps({
    item: {
      type: Object,
      default: () => {},
    },
  });
</script>

<template>
  <div class="px-6 py-4 bg-white border-2 border-gray-30 rounded-md">
    <div class="content mb-4">
      <h2 class="text-[1.5rem] font-semibold pt-1">
        {{ item.name }}
      </h2>
      <p class="capitalize text-gray-15 text-[0.9rem] mb-4">
        {{ item.status }}
      </p>
      <div class="flex flex-col text-[0.8rem]">
        <div class="flex items-center py-1">
          <div
            class="w-[2.5rem] h-[2.5rem] bg-accent-100 text-white mr-2 rounded-full flex items-center justify-center"
          >
            <img
              class="w-[1rem]"
              src="@/assets/icons/group-align-outline.svg"
              alt=""
            />
          </div>
          <div>
            <p>Qurilmalar soni</p>
            <p class="text-gray-15">{{ item.count }} ta</p>
          </div>
        </div>
        <div class="flex items-center py-1">
          <div
            class="w-[2.5rem] h-[2.5rem] bg-accent-100 text-white mr-2 rounded-full flex items-center justify-center"
          >
            <img
              class="w-[1rem]"
              src="@/assets/icons/calendar-outline.svg"
              alt=""
            />
          </div>
          <div>
            <p>Oxirgi yig'ilish bo'lib o'tgan vaqt</p>
            <p class="text-gray-15">15:00 05.09.2022</p>
          </div>
        </div>
        <div class="flex items-center py-1">
          <div
            class="w-[2.5rem] h-[2.5rem] bg-accent-100 text-white mr-2 rounded-full flex items-center justify-center"
          >
            <img
              class="w-[1rem]"
              src="@/assets/icons/calendar-outline.svg"
              alt=""
            />
          </div>
          <div>
            <p>Keyingi yig'ilish vaqti</p>
            <p class="text-gray-15">11:00 01.12.2022</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer flex gap-2 justify-end">
      <AppButton size="special" class="bg-accent-100">O'zgartirish</AppButton>
      <AppButton size="special" color="danger">
        <AppIcon v-html="DeleteIcon"></AppIcon>
      </AppButton>
    </div>
  </div>
</template>
