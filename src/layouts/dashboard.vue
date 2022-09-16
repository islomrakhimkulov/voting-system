<template>
  <div class="relative">
    <div class="bg-accent-50 py-3">
      <div class="flex mx-auto container gap-4">
        <!-- Logo -->
        <div class="mr-10">
          <img class="h-[4.375rem]" src="@/assets/logo.svg" alt="" />
        </div>
        <!-- router links  -->
        <div class="flex items-center gap-4">
          <router-link
            :to="{ name: 'dashboard-meetings' }"
            class="text-sm font-normal uppercase rounded"
          >
            Yig'ilishlar
          </router-link>
          <router-link
            :to="{ name: 'dashboard-devices' }"
            class="text-sm font-normal uppercase rounded"
          >
            Qurilmalar
          </router-link>
          <router-link
            :to="{ name: 'dashboard-locations' }"
            class="text-sm font-normal uppercase rounded"
          >
            Xonalar
          </router-link>
        </div>
      </div>
    </div>
    <!-- wave background svg icon -->
    <div
      class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
    ></div>
  </div>

  <main>
    <router-view />
  </main>
</template>

<style lang="postcss" scoped>
  a.router-link-active {
    @apply px-6 py-3 bg-accent-300 text-white rounded;
  }
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
