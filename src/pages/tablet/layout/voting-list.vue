<script>
  const { ques } = defineProps({
    questions: {
      type: Object,
      default: () => ({}),
    },
  });
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
      Kun tartibidagi mavzular
    </h4>

    {{ questions }}

    <!-- tasks list -->
    <div class="pb-5">
      <template v-for="(question, idx) in questions" :key="idx">
        <VotingQuestionItem class="my-3" :question="question" />
      </template>
    </div>
  </div>
</template>
