<script lang="ts">
	const COLORS = ['success', 'default', 'danger'];
</script>
<script setup lang="ts">
	const emit = defineEmits(['dragStart']);
	const { device, color, isDraggable } = defineProps({
		name: {
			type: String,
			default: () => 'Unnamed',
		},
		device: {
			type: Object,
			default: () => ({}),
		},
		color: {
			type: String,
			default: 'default',
			validator: (value: string) => COLORS.includes(value),
		},

		isDraggable: {
			type: Boolean,
			default: () => false,
		},
	});

	const classes = computed(() => {
		return {
			[`${color}`]: true,
		};
	});
</script>

<template>
	<div
		:class="classes"
		class="w-[220px] p-2 border-2 rounded-lg app-device cursor-move"
		draggable="isDraggable"
		@dragstart="onDragStart"
	>
		<img src="@/assets/icons/group-align.svg" class="icon" />
		<div class="flex flex-col items-center">
			<!-- icon -->
			<img class="w-[90px] icon" src="@/assets/phone-tablet.svg" />
			<!-- group name -->
			<h2 class="text-[16px] font-semibold">
				{{ device.title }}
			</h2>
		</div>
		<!-- group status-->
		<p class="text-[14px] text-right">{{ device.status }}</p>
	</div>
</template>

<style lang="postcss">
	.app-device {
		@apply bg-gray-30 text-gray-70 border-gray-70;
	}

	.app-device.success {
		@apply bg-success-50 border-success-300 text-success-300;
	}
	.app-device.danger {
		@apply bg-danger-300 border-danger-400 text-white;
	}
	.app-device.success .icon,
	.app-device.success .icon div > .icon {
		filter: invert(48%) sepia(92%) saturate(368%) hue-rotate(99deg)
			brightness(101%) contrast(90%);
	}
</style>
