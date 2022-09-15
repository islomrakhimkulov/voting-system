<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="container mx-auto py-4">
      <!-- wave background svg icon -->
      <div
        class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
      ></div>

      <div class="flex">
        <div class="w-[75%]">
          <div>
            <div class="flex text-[16px] text-gray-900 pb-3">
              <img class="mr-1" src="@/assets/icons/chevron-left.svg" alt="" />
              <h4 class="uppercase">Yig'ilishlar</h4>
            </div>
            <!-- subject title name -->
            <div class="text-[18px] pb-3 text-gray-900 font-semibold uppercase">
              ABOUT NEW INDUSTRY OF ALL REGIONS AND THEIR LIVES, WHAT DO THOSE
              WHO ARE POOR NEED AND GOVERNMENT SHOULD PROVIDE WORK SPACE TO HELP
              OUT
            </div>

            <div class="flex items-center pb-3">
              <router-link
                :to="{ name: 'dashboard-presentation-view' }"
                class="mr-3 text-[15px] text-gray-15 font-semibold"
              >
                Tarkibi</router-link
              >
              <router-link
                :to="{ name: 'dashboard-results' }"
                class="text-accent-300 text-[15px] font-semibold"
                >Natija</router-link
              >
            </div>
            <!-- download button -->
            <div class="bg-primary-10 p-3 mb-4 rounded">
              <h2 class="pb-1 text-gray-5">Barcha natijalarni yuklab olish</h2>
              <AppButton color="accent" size="small">Yuklab olish</AppButton>
            </div>

            <!--all result list -->
            <div class="bg-primary-10 mt-4 p-5 rounded">
              <!-- we can use v-for for show all result list -->
              <div class="overflow-y-scroll h-[550px] scroller">
                <div class="pb-2">
                  <h2 class="text-gray-900 pb-2 text-sm uppercase">
                    1-Ovozga qoyilgan mavzu
                  </h2>

                  <!-- subject item title -->
                  <div class="text-[16px] pb-2 text-gray-900 font-semibold">
                    About new industry of all regions and their lives, what do
                    those who are poor need and government should provide work
                    space in order to help out
                  </div>

                  <!-- subject item info details -->
                  <p class="text-[15px] pb-2 pr-8 text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <!-- voting result -->
                  <h2 class="text-sm text-gray-900 uppercase">
                    Ovoz berish natijasi
                  </h2>

                  <div class="flex justify-center items-center">
                    <div>
                      <VotesCountChart style="width: 400px" />
                    </div>

                    <div>
                      <GroupedVotingResultChart style="width: 400px" />
                    </div>
                  </div>
                </div>
                <div class="pb-2">
                  <h2 class="text-gray-900 pb-2 text-sm uppercase">
                    2-Ovozga qoyilgan mavzu
                  </h2>

                  <!-- subject item title -->
                  <div class="text-[16px] pb-2 text-gray-900 font-semibold">
                    About new industry of all regions and their lives, what do
                    those who are poor need and government should provide work
                    space in order to help out
                  </div>

                  <!-- subject item info details -->
                  <p class="text-[15px] pb-2 pr-8 text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <!-- voting result -->
                  <h2 class="text-sm text-gray-900 uppercase">
                    Ovoz berish natijasi
                  </h2>

                  <div class="flex justify-center items-center">
                    <div>
                      <VotesCountChart style="width: 400px" />
                    </div>

                    <div>
                      <GroupedVotingResultChart style="width: 400px" />
                    </div>
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

<style>
  .scroller {
    scrollbar-width: thin;
    scrollbar-color: yellow;
    scrollbar-base-color: brown;
    scrollbar-arrow-color: #f4cb0a !important;
    scrollbar-track-color: blue !important;
  }
</style>
