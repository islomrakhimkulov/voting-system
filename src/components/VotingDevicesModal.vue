<script setup lang="ts">
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['close']);

  const closeModal = () => {
    emit('close');
  };

  const groupName = ref('');

  const ungroupedDevices = ref([
    { id: 1, title: "Aziz's tablet", status: 'guruhlanmagan' },
    { id: 2, title: "Islom's tablet", status: 'guruhlanmagan' },
    { id: 3, title: "Javohir's tablet", status: 'guruhlanmagan' },
  ]);

  const groupedDevices = ref([
    // { id: 1, title: "Joh's tablet", status: 'guruhlangan' },
  ]);
</script>

<template>
  <div>
    <!-- opening add group modal  -->
    <Teleport to="body">
      <transition name="modal" v-if="isOpen">
        <div class="modal">
          <div
            class="mx-auto mt-[130px] max-w-[1100px] bg-white shadow rounded-md"
          >
            <!-- add subject  -->
            <div class="flex">
              <div class="w-1/2 border-r-[1px] border-gray-45">
                <div class="bg-gray-3000 py-5 px-7 rounded-t-md">
                  <!-- title -->
                  <h2 class="text-[16px] font-semibold uppercase">
                    Qurilamalar guruhi
                  </h2>

                  <!-- form content -->
                  <div class="py-2">
                    <div class="flex flex-col py-2">
                      <input
                        @click.prevent="addName"
                        v-model="groupName"
                        type="text"
                        placeholder="Guruh nomini kiriting"
                        name="title"
                        id="title"
                        class="rounded text-[16px] border-gray-45"
                      />
                    </div>
                    <!-- guruhlashtirilgan qurilmalar -->
                    <VotingDeviceDeck
                      v-model:devices="groupedDevices"
                      draggable-group="list"
                      color="success"
                      name="Guruhlashtirilgan Qurilmalar"
                    />
                  </div>
                </div>

                <!-- bottom buttons -->
                <div
                  class="bg-white border-t-[1px] border-gray-45 rounded-b-md"
                >
                  <div class="p-5 flex justify-end gap-4">
                    <AppButton
                      @click="closeModal"
                      class="w-1/4"
                      size="small"
                      color="simple"
                      >Bekor qilish</AppButton
                    >
                    <AppButton class="w-1/4" size="small" color="accent"
                      >Saqlash</AppButton
                    >
                  </div>
                </div>
              </div>

              <!-- guruhlashtilrilmagan qurilmalar -->
              <div class="w-1/2">
                <div class="px-7 py-5">
                  <VotingDeviceDeck
                    v-model:devices="ungroupedDevices"
                    draggable-group="list"
                    name="Guruhlashtirilmagan qurilmalar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style scoped>
  .modal {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }
</style>
