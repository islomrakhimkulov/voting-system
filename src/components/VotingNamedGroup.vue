<script setup lang="ts">
	import DeleteIcon from '@/assets/icons/delete-white.svg?raw';
	import EditIcon from '@/assets/icons/edit-white.svg?raw';
	const { cardInfo } = defineProps({
		cardInfo: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['delete']);
	const deleteGroupName = () => {
		emits('delete');
	};
</script>
<template>
	<div
		class="w-[270px] p-2 bg-accent-200 border-2 border-accent-300 text-white rounded-md"
	>
		<!-- icon -->
		<div class="flex justify-between items-center">
			<img class="w-[30px]" src="@/assets/icons/group-icon.svg" alt="" />
			<div class="flex gap-2">
				<AppButton size="special" color="success">
					<AppIcon v-html="EditIcon" size="special"></AppIcon>
				</AppButton>
				<AppButton size="special" color="danger">
					<AppIcon
						@click="deleteGroupName"
						v-html="DeleteIcon"
						size="special"
					></AppIcon>
				</AppButton>
			</div>
		</div>

		<h2 class="text-[20px] py-2 font-semibold text-center uppercase">
			{{ cardInfo.name }}
		</h2>

		<p class="text-[16px] text-center">
			Qurilamalar soni: {{ cardInfo.memberCount }}
		</p>
	</div>
</template>
