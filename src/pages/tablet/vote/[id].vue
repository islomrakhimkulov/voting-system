<script setup lang="ts">
  const props = defineProps({
    id: String,
  });
  const id = toRef(props, 'id');

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

  const question = computed(
    () =>
      questions.value.find((item: any) => item.id.toString() === id.value) || {}
  );

  const nextPageLink = computed(() => {
    const pageNumber = Number.parseInt(id.value);
    if (pageNumber >= questions.value.length) {
      return undefined;
    }

    return `/tablet/vote/${pageNumber + 1}`;
  });
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
            <template v-for="(question, idx) in questions" :key="idx">
              <VotingQuestionItem class="my-3" :question="question" />
            </template>
          </div>
        </div>
      </div>
      <div class="w-[56%]">
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
            <div class="flex items-center justify-center h-screen">
              <div>
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

                <div class="absolute bottom-5">
                  <!-- next prev buttons -->
                  <div
                    class="flex justify-between items-center gap-[500px] pt-5"
                  >
                    <AppButton size="small">
                      <router-link :to="`/tablet/vote/${id - 1}`"
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
