<script setup lang="ts">
	const { unNamedGroupItem } = defineProps({
		unNamedGroupItem: {
			type: Object,
			default: () => ({}),
		},
	});
</script>

<template>
	<div
		class="w-[220px] p-2 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
	>
		<img src="@/assets/icons/group-align.svg" alt="" />
		<div class="flex flex-col items-center">
			<!-- icon -->
			<img
				class="w-[90px] pointer-events-none"
				src="@/assets/phone-tablet.svg"
				alt=""
			/>
			<!-- group name -->
			<h2 class="text-[16px] font-semibold">
				{{ unNamedGroupItem.title }}
			</h2>
		</div>
		<!-- group status-->
		<p class="text-[14px] text-right">{{ unNamedGroupItem.status }}</p>
	</div>
</template>
