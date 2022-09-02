<script setup lang="ts">
  const props = defineProps({
    id: String,
  });

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
</script>

<template>
  <div class="px-5 py-5">
    <!-- Subject title -->
    <h2
      class="pb-4 text-[20px] text-gray-900 uppercase font-semibold leading-6"
    >
      XIX Oliy Majlis Qonunchilik palatasining navbatdagi yalpi majlisi
    </h2>

    <!-- daily tasks title -->
    <h4 class="text-[16px] text-gray-900 uppercase">
      Kun tartibidagi mavzulFar
    </h4>

    <!-- tasks list -->
    <div class="pb-5">
      <template v-for="(question, idx) in questions" :key="idx">
        <VotingQuestionItem class="my-3" :question="question" />
      </template>
    </div>
  </div>
</template>
