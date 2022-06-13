<script setup lang="ts">
	import { computed } from 'vue';
</script>
<template>
	<div class="p-4 m-4 w-[360px] bg-white rounded-md shadow-md">
		<!-- Subject -->
		<h2 class="font-semibold text-[16px]">
			About new industry of all regions and their lives, what do those who
			are poor...
		</h2>
		<!-- Date Object here -->
		<p class="py-2 text-gray-90 text-sm">21 may 2022 - 25 may 2022</p>

		<div class="text-center">
			<!-- AppTimer -->
			<AppTimer />
			<div class="pb-6">
				<p class="text-gray-90 text-sm">
					ovoz berish yakunlangunigacha
				</p>
			</div>

			<!-- AppButton -->
			<AppButton color="accent">Boshqaruv</AppButton>
		</div>
	</div>
</template>
