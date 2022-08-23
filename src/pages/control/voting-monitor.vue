<script setup lang="ts"></script>

<template>
  <div class="relative">
    <AppNavbar />
    <div class="container mx-auto py-4">
      <!-- wave background svg icon -->
      <div
        class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
      ></div>

      <!-- title -->
      <div>
        <div class="flex text-[16px] text-gray-900 pb-3">
          <img class="mr-1" src="@/assets/icons/chevron-left.svg" alt="" />
          <h4 class="uppercase">Yig'ilishlar</h4>
        </div>
        <!-- subject title name -->
        <h2
          class="text-[18px] pb-3 text-gray-900 w-[1000px] font-semibold uppercase"
        >
          <span
            class="rounded-full inline-block bg-success-300 w-[12px] h-[12px]"
          ></span>
          ABOUT NEW INDUSTRY OF ALL REGIONS AND THEIR LIVES, WHAT DO THOSE WHO
          ARE POOR NEED AND GOVERNMENT SHOULD PROVIDE WORK SPACE TO HELP OUT
        </h2>

        <div class="flex pb-3">
          <div class="text-accent-300 text-[15px] font-semibold">Tarkibi</div>
          <p class="ml-3 text-[15px] text-gray-15 font-semibold">Natija</p>
        </div>
      </div>

      <div class="flex">
        <div class="w-[40%]">
          <!-- moniter's screen here -->
          <div
            class="w-[600px] h-[500px] bg-accent-60 flex justify-center items-center rounded"
          >
            <div class="text-[42px] text-white uppercase">Monitor screen</div>
          </div>
        </div>
        <div class="w-[60%] ml-[20px]">
          <!-- overflow-y-scroll h-[555px] -->
          <!-- i can give height this div, 
					which is covered voting-planned-list component, the reason why, for get scroll y, 
					which make create scroll for excess list's item   -->
          <VotingPlannedList />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
