<script setup lang="ts">
  const resultList = ref([
    {
      id: 1,
      text: 'About new industry of all regions and their lives, what do those who are poor...',
      status: 'active',
    },
    {
      id: 2,
      text: 'About new industry of all regions and their lives, what do those who are poor... ',
      status: 'noactive',
    },
    {
      id: 3,
      text: 'About new industry of all regions and their lives, what do those who are poor... ',
      status: 'active',
    },
  ]);
</script>

<template>
  <div class="relative">
    <div class="flex">
      <div class="w-[42%] h-screen overflow-y-scroll bg-primary-25">
        <div class="px-5 py-5">
          <!-- Subject title -->
          <h2
            class="pb-4 text-[20px] text-gray-900 uppercase font-semibold leading-6"
          >
            XIX Oliy Majlis Qonunchilik palatasining navbatdagi yalpi majlisi
          </h2>

          <!-- daily tasks title -->
          <h4 class="text-[16px] text-gray-900 uppercase">
            Kun tartibidagi mavzular
          </h4>

          <!-- tasks list -->
          <div class="pb-5">
            <template v-for="question in resultList" :key="question.id">
              <VotingQuestionItem class="my-3" :question="question" />
            </template>
          </div>
        </div>
      </div>
      <div class="w-[54%]">
        <div class="pl-6">
          <!-- wave background svg icon -->
          <!-- bottom svg -->
          <div
            class="fixed bottom-[-400px] right-[-400px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
          ></div>
          <!-- top svg-->
          <div
            class="fixed top-[-500px] left-[20px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
          ></div>

          <!-- subject content here -->

          <div>
            <div class="py-4 text-gray-900">
              <!-- about subject title -->
              <span class="text-[14px] uppercase">
                1- ovozga qo'yilgan mavzu
              </span>

              <!-- subject title content -->
              <h2 class="text-[18px] py-3 font-semibold leading-6">
                About new industry of all regions and their lives, what do those
                who are poor need and government should provide work space in
                order to help out
              </h2>

              <!-- subject content info -->
              <p class="text-[14px] pb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book, Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <!-- time -->
              <div class="pb-2">
                <h2 class="text-[14px] pb-3 text-gray-900 uppercase">
                  Ajratilgan vaqt
                </h2>
                <div>
                  <AppTimer />
                </div>
              </div>
              <!-- chart result  -->
              <div>
                <h2 class="text-[14px] text-gray-900 uppercase">
                  Ovoz berish jarayoni
                </h2>
                <div>
                  <div class="flex justify-between">
                    <div>
                      <VotesCountChart style="width: 300px" />
                    </div>

                    <!-- buttons -->
                    <div
                      class="flex flex-col justify-center items-center gap-5"
                    >
                      <AppButton color="success" class="w-full"
                        >Qo'shilaman</AppButton
                      >
                      <AppButton color="danger" class="w-full"
                        >Qarshiman</AppButton
                      >
                      <AppButton color="warning" class="w-full"
                        >Be'tarafman</AppButton
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center pt-5">
              <AppButton size="small" color="disabled">orqaga</AppButton>
              <AppButton size="small" color="next">keyingi</AppButton>
            </div>
          </div>
          <!-- next prev buttons -->
        </div>
      </div>
    </div>
  </div>
</template>
