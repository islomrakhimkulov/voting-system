<script setup lang="ts">
	const { active, question } = defineProps({
		active: {
			type: Boolean,
			default: () => false,
		},
		question: {
			type: Object,
			default: () => ({}),
		},
	});
</script>

<template>
	<div class="p-3 bg-white rounded-md shadow w-[400px]">
		<div class="flex items-center">
			<div>
				<div
					class="w-[50px] h-[50px] circle bg-gray-55 text-[20px] text-gray-900 rounded-full flex items-center justify-center"
				>
					{{ question.id }}
				</div>
			</div>
			<div class="pl-5 text-[15px]">
				{{ question.text }}
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
	.question-item {
		@apply bg-primary-300  text-white !important;
	}
	.question-item .circle {
		@apply bg-white text-black;
	}
</style>
