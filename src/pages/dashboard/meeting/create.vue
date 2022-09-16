<script setup lang="ts">
  import PlusIcon from '@/assets/icons/bi_plus-circle.svg?raw';
  // import TickIcon from '@/assets/icons/check.svg?raw';
  const notSubject = false;
  const isOpenModal = ref(false);

  const showModal = () => {
    isOpenModal.value = true;
  };

  const closeSubjectModal = () => {
    isOpenModal.value = false;
  };

  const meetingName = ref('');

  const sendName = () => {
    console.log(meetingName.value);
    meetingName.value = '';
  };
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="flex">
      <div class="w-[75%]">
        <div class="flex text-[15px] text-gray-900 py-1">
          <img class="mr-1" src="@/assets/icons/chevron-left.svg" alt="" />
          <h4 class="uppercase">
            <RouterLink to="meetings">Yig'ilishlar</RouterLink>
          </h4>
        </div>
        <div class="py-2">
          <input
            @keyup.enter="sendName"
            v-model="meetingName"
            type="text"
            placeholder="Yig'ilishni nomini kiriting:"
            class="p-3 w-full placeholder:uppercase placeholder:text-gray-90 outline-none rounded border-gray-90"
          />
        </div>
        <div class="flex items-center pb-3">
          <router-link
            :to="{ name: 'dashboard-meeting-create' }"
            class="mr-3 text-[15px] text-accent-300 font-semibold"
          >
            Tarkibi</router-link
          >
          <router-link
            :to="{ name: 'dashboard-meetings' }"
            class="text-gray-15 text-[15px] font-semibold"
            >Natija</router-link
          >
        </div>
        <!--           
                     --------   guide   --------
                     if subject not found, put not found svg icon,
                     else VotingSubjectsAccordion

                 -->

        <div v-if="!notSubject">
          <VotingSubjectsAccordion />
        </div>
        <div class="flex items-center justify-center py-10" v-else>
          <img src="@/assets/not-add.png" alt="" class="pointer-events-none" />
        </div>
        <!-- Voting Subjects Accordion -->

        <!-- Add Subject Button -->
        <div>
          <AppButton
            @click="showModal"
            class="py-4 w-full uppercase"
            color="accent"
            size="large"
          >
            <AppIcon v-html="PlusIcon" position="left"></AppIcon>
            Mavzu qo'shish</AppButton
          >
        </div>
      </div>
      <div class="w-[20%] ml-5 mt-[130px]">
        <AppButton color="accent" class="ml-5">Saqlash</AppButton>
        <CurrentTime />
      </div>

      <!-- modal here -->

      <VotingFormModal
        :is-open-modal="isOpenModal"
        @closeSubjectModal="closeSubjectModal"
      />
    </div>
  </div>
</template>

<style lang="postcss">
  .modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
