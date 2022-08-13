<script setup lang="ts">
	import Draggable from 'vuedraggable';

	const { name, itemDraggable, devices } = defineProps({
		devices: {
			type: Array,
			default: () => [],
		},
		name: {
			type: String,
			default: 'Guruhlashtirilgan qurilamalar',
		},
		color: {
			type: String,
			default: () => 'default',
		},
		itemDraggable: {
			type: Boolean,
			default: () => false,
		},
		draggableGroup: {
			type: String,
			default: () => 'default',
		},
	});
</script>

<template>
	<div>
		<h2 class="text-[16px] font-semibold uppercase">
			{{ name }}
		</h2>
		<!-- card group-->
		<div class="py- 2">
			<!-- cards list -->
			<draggable
				v-model="devices"
				class="w-full flex flex-row items-center flex-wrap gap-2"
				:group="draggableGroup"
				item-key="id"
				ghost-class="ghost"
				animation="500"
			>
				<template #item="{ device }">
					<VotingDeviceCard
						:device="device"
						:color="color"
					></VotingDeviceCard>
				</template>
			</draggable>
		</div>
	</div>
</template>

<style lang="postcss">
	.ghost {
		@apply bg-success-200 z-10 text-white cursor-move;
	}
</style>
