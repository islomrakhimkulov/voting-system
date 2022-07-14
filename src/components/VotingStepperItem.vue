<script setup lang="ts">
	const items = ref([
		{ id: 1, text: 'Typescript ' },
		{ id: 2, text: 'Javascript' },
		{ id: 1, text: 'Nuxt' },
		{ id: 1, text: 'Vue' },
		{ id: 1, text: 'Tailwind CSS' },
	]);
</script>

<template>
	<div class="relative">
		<div class="text-2xl">Voting Stepper component's item</div>
		<div v-for="item in items" :key="item.id">
			<div
				class="before:w-[2px] before:h-[4px] before:bg-primary-300 before:absolute before:top-[20px] my-5"
			>
				{{ item.text }}
			</div>
		</div>
	</div>
</template>
