<script setup lang="ts">
	const { accordion } = defineProps({
		accordion: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['change']);

	const isOpen = computed(() => {
		return accordion.open ? 'd-block' : 'hidden';
	});
</script>

<template>
	<div>
		<ul>
			<li class="p-3">
				<div
					class="flex items-center justify-between bg-green-700 p-4 text-[16px] text-white cursor-pointer shadow-lg"
				>
					<div class="flex items-center">
						<!-- sorting icon -->
						<img src="../assets/icons/align.svg" alt="" />

						<!-- order number -->
						<p class="px-4">{{ accordion.id }}</p>

						<!-- subject title -->
						<div>{{ accordion.subjectTitle }}</div>
					</div>

					<!-- arrow icon -->
					<div>
						<img
							:class="accordion.open ? 'rotate-180' : 'rotate-0'"
							src="../assets/icons/arrow-down.svg"
							alt=""
						/>
					</div>
				</div>
				<div :class="isOpen" class="p-2">
					{{ accordion.subjectText }}
				</div>
			</li>
		</ul>
	</div>
</template>

<style></style>
