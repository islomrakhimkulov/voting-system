<script setup lang="ts">
	const { accordion } = defineProps({
		accordion: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['change']);

	const sayOpen = function () {
		emits('change');
	};

	const isOpen = computed(() => {
		return accordion.open ? 'd-block' : 'hidden';
	});
</script>

<template>
	<ul class="p-4">
		<li class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- sorting icon -->
				<img src="../assets/icons/align.svg" alt="" />

				<!-- order number -->
				<p class="px-6">{{ accordion.id }}</p>

				<!-- subject title -->
				<div class="w-[1000px] mx-auto">
					<div class="text-[18px] cursor-pointer" @click="sayOpen">
						<p>{{ accordion.subjectTitle }}</p>
					</div>
					<div class="py-2 text-[16px] text-gray-25" :class="isOpen">
						<div>
							{{ accordion.subjectText }}
						</div>
						<div class="flex justify-end">
							<!-- set icons here -->
						</div>
					</div>
				</div>
			</div>

			<!-- arrow icon -->
			<div>
				<img
					:class="accordion.open ? 'rotate-180' : 'rotate-0'"
					src="../assets/icons/arrow-down.svg"
					alt=""
				/>
			</div>
		</li>
	</ul>
</template>

<style>
	.fade-enter-active .fade-leave-active {
		transition: opacity, 2s ease;
	}

	.fade-enter-from .fade-enter-to {
		opacity: 0;
	}
</style>
