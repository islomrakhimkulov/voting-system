<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const questions = ref([
    {
      id: 1,
      title:
        'About new industry of all regions and their lives, what do those who are poor...',
      text: 'lorem10',
      status: 'active',
    },
    {
      id: 2,
      title:
        'About new industry of all regions and their lives, what do those who are poor...',
      text: 'lorem12',
      status: 'noactive',
    },
    {
      id: 3,
      title:
        'About new industry of all regions and their lives, what do those who are poor...',
      text: 'lorem13',
      status: 'active',
    },
    {
      id: 4,
      title:
        'About new industry of all regions and their lives, what do those who are poor...',
      text: 'lorem14',
      status: 'active',
    },
  ]);

  const router = useRouter();
  const id = router.currentRoute.value.params.id;

  const question = computed(
    () =>
      questions.value.find((item: any) => item.id.toString() === id.value) || {}
  );

  const pageNumber = Number.parseInt(id);

  const nextPageLink = computed(() => {
    if (pageNumber >= questions.value.length) {
      return undefined;
    }

    return `/voting-device/vote/${pageNumber + 1}`;
  });
</script>

<template>
  <div class="relative">
    <div class="flex">
      <div class="w-[42%] h-screen overflow-y-scroll bg-primary-25">
        <!-- <VotingTabletLayout /> -->
      </div>
      <div class="w-[56%]">
        <div class="pl-6">
          <!-- wave background svg icon -->
          <div
            class="fixed bottom-[-400px] right-[-400px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
          ></div>
          <!-- top svg-->
          <div
            class="fixed top-[-500px] left-[20px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
          ></div>

          <!-- subject content here -->
          <div>
            <div class="flex justify-center items-center h-screen">
              <div>
                <!-- questions area  -->
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
                <!-- voting result -->

                <!-- voting final result -->

                <!-- prev and next buttons -->
                <div class="absolute bottom-5">
                  <!-- next prev buttons -->
                  <div class="flex justify-between pt-5">
                    <AppButton size="small">
                      <router-link :to="`/voting-device/vote/${pageNumber - 1}`"
                        >Orqaga</router-link
                      >
                    </AppButton>

                    <AppButton size="small">
                      <router-link :to="nextPageLink">Keyingi</router-link>
                    </AppButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<route lang="yaml">
meta:
  layout: voting-device
</route>
