<script setup lang="ts">
	const { active } = defineProps({
		active: {
			type: Boolean,
			default: () => false,
		},
	});

	const classes = computed(() => {
		return {
			'question-item': active,
		};
	});
</script>

<template>
	<div class="p-5 bg-white rounded-md shadow w-[500px]" :class="classes">
		<div class="flex items-center">
			<div>
				<div
					class="w-[60px] h-[60px] circle bg-gray-55 text-[26px] text-gray-900 rounded-full flex items-center justify-center"
				>
					1
				</div>
			</div>
			<div class="pl-5 text-lg">
				About new industry of all regions and their lives, what do those
				who are poor...
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
