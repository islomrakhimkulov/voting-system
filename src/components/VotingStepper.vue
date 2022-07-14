<script setup lang="ts">
	const currentSubjectList = ref([
		{
			id: 1,
			text: 'About new industry of all regions and their lives, what do those who are poor need and government should provide...',
		},
		{
			id: 2,
			text: 'About new industry of all regions and their lives, what do those who are poor need and government should provide...',
		},
		{
			id: 3,
			text: 'About new industry of all regions and their lives, what do those who are poor need and government should provide...',
		},
		{
			id: 4,
			text: 'About new industry of all regions and their lives, what do those who are poor need and government should provide...',
		},
		{
			id: 5,
			text: 'About new industry of all regions and their lives, what do those who are poor need and government should provide...',
		},
	]);
</script>

<template>
	<div v-for="subject in currentSubjectList" :key="subject.id">
		<div class="flex items-center gap-10 my-[30px] relative">
			<!-- counter id -->
			<div
				class="w-[50px] h-[50px] circle bg-primary-300 text-white text-[20px] before:absolute before:w-[2px] before:h-[40px] before:bg-primary-100 before:bottom-[-35px] last:before:w-5 last:before:h-3 last:before:bg-danger-500 rounded-full flex items-center justify-center"
			>
				{{ subject.id }}
			</div>
			<!-- content description -->
			<div
				class="w-[600px] py-4 px-8 bg-primary-300 text-white text-[18px] rounded flex items-center justify-center"
			>
				<!-- content description here -->
				<p class="pr-4">
					{{ subject.text }}
				</p>

				<img src="@/assets/icons/arrow-right.svg" alt="" />
			</div>
		</div>
	</div>
</template>
