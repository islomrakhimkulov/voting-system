<script setup lang="ts">
	import { Subject } from '@/types/subjectType';

	const emit = defineEmits(['update:devices']);
	const { name, itemDraggable, devices } = defineProps({
		devices: {
			type: Array,
			default: () => [],
		},
		name: {
			type: String,
			default: 'Guruhlashtirilgan qurilamalar',
		},
		itemColor: {
			type: String,
			default: () => 'default',
		},
		itemDraggable: {
			type: Boolean,
			default: () => false,
		},
	});

	const isDraggingOverDevice = ref(false);

	let onDeviceDragStart = (event: DragEvent, device: Subject) => {
		emit(
			'update:devices',
			devices.filter((item: any) => item.id !== device.id)
		);
	};

	const onDragOver = (event: DragEvent) => {
		if (
			!itemDraggable ||
			!event.dataTransfer ||
			event.dataTransfer.getData('type') !== 'device'
		) {
			return;
		}

		event.preventDefault();
		isDraggingOverDevice.value = true;
	};

	const onDragLeave = (event: DragEvent) => {
		isDraggingOverDevice.value = false;
	};

	const onDrop = (event: DragEvent) => {
		if (
			!itemDraggable ||
			!event.dataTransfer ||
			event.dataTransfer.getData('type') !== 'device'
		) {
			return;
		}

		event.preventDefault();

		const device = JSON.parse(event.dataTransfer.getData('data'));

		devices.push(device);
	};
</script>

<template>
	<div
		:class="{ deviceDragOver: isDraggingOverDevice }"
		@dragover="onDragOver"
		@dragleave="onDragLeave"
		@drop="onDrop"
	>
		<h2 class="text-[16px] font-semibold uppercase">
			{{ name }}
		</h2>
		<!-- card group-->
		<div class="py-2 flex flex-row items-center flex-wrap gap-2">
			<!-- cards list -->
			<template v-for="device in devices" :key="device.id">
				<VotingDeviceCard
					:device="device"
					:color="itemColor"
					:is-draggable="itemDraggable"
					@dragStart="onDeviceDragStart"
				/>
			</template>
		</div>
	</div>
</template>
