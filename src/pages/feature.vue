<template>
  <div
    class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
  >
    <!-- Background -->
    <ParticlesBackground class="absolute w-full -z-0" />

    <!-- Logo -->
    <div
      class="bg-logo w-[14.75rem] h-[7.9375rem] ml-[100px] bg-cover bg-center absolute top-6"
    ></div>

    <!-- Cards -->
    <div class="flex gap-6 z-0 text-[16px]">
      <!-- <router-link :to="{ name: 'home' }"> </router-link> -->
      <router-link
        :to="{ name: 'presentation-voting-session' }"
        class="w-[220px] flex flex-col items-center bg-primary-200 rounded p-6"
      >
        <img src="@/assets/presentation.svg" alt="" />
        <span class="text-gray-0 mt-4 block">Taqdimot ko’rinishi</span>
      </router-link>
      <!-- <router-link :to="{ name: 'other-page' }"> </router-link> -->
      <router-link
        :to="{ name: 'voting-device-voting-registration' }"
        class="w-[220px] flex flex-col items-center bg-primary-200 rounded p-6"
      >
        <img src="@/assets/tablet.svg" alt="" />
        <span class="text-gray-0 mt-4 block"> Ovoz Berish</span>
      </router-link>

      <!-- <router-link :to="{ name: 'other-page' }"> </router-link> -->
      <router-link
        :to="{ name: 'dashboard-meetings' }"
        class="w-[220px] flex flex-col items-center bg-primary-200 rounded p-6"
      >
        <img src="@/assets/admin.svg" alt="" />
        <span class="text-gray-0 mt-4 block">Boshqaruv</span>
      </router-link>
    </div>

    <!-- Footer Text -->
    <div class="absolute bottom-6">
      <span class="text-[16px] text-gray-400">E-voting system</span>
    </div>
  </div>
</template>
