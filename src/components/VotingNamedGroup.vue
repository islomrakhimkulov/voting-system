<script setup lang="ts">
	import DeleteIcon from '@/assets/icons/delete.svg?raw';
	import EditIcon from '@/assets/icons/edit-white.svg?raw';
	const { namedCard } = defineProps({
		namedCard: {
			type: Object,
			default: () => ({}),
		},
	});
</script>
<template>
	<div
		class="w-[270px] p-2 bg-primary-300 border-2 border-primary-400 text-white rounded-md"
	>
		<!-- icon -->
		<div class="flex justify-between items-center">
			<img class="w-[30px]" src="@/assets/icons/group-icon.svg" alt="" />
			<AppButton size="small" color="transparent">
				<AppIcon v-html="DeleteIcon" size="small"></AppIcon>
			</AppButton>
		</div>

		<h2 class="text-[20px] py-2 font-semibold text-center uppercase">
			{{ namedCard.name }}
		</h2>
		<div class="flex justify-between items-center">
			<AppButton size="small" color="transparent">
				<AppIcon v-html="EditIcon" size="small"></AppIcon>
			</AppButton>
			<p class="text-[16px] text-right">
				Qurilamalar soni: {{ namedCard.memberCount }}
			</p>
		</div>
	</div>
</template>
