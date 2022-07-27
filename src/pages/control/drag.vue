<script setup lang="">
	const items = ref([
		{ id: 0, title: 'Item A', list: 1 },
		{ id: 1, title: 'Item B', list: 1 },
		{ id: 2, title: 'Item C', list: 2 },
	]);

	const getList = list => {
		return items.value.filter(item => item.list == list);
	};

	const startDrag = (Event, item) => {
		console.log(item);
		Event.dataTransfer.dropEffect = 'move';
		Event.dataTransfer.effectAllowed = 'copyMove';
		Event.dataTransfer.setData('itemID', item.id);
	};

	const onDrop = (Event, list) => {
		const itemID = Event.dataTransfer.getData('itemID');
		const item = items.value.find(
			item => item.id === Number.parseInt(itemID)
		);
		item.list = list;
	};
</script>
<template>
	<div>
		<h1
			class="text-center text-accent-300 shadow-lg py-4 font-semibold text-2xl"
		>
			Drag and Drop
		</h1>
		<div class="mx-auto container">
			<TestTodo />

			<div
				class="drag-zone"
				@drop="onDrop($event, 1)"
				@dragenter.prevent
				@dragover.prevent
			>
				<div
					v-for="item in getList(1)"
					:key="item.id"
					class="drag-el"
					draggable="true"
					@dragstart="startDrag($event, item)"
				>
					{{ item.title }}
				</div>
			</div>
			<div
				class="drag-zone"
				@drop="onDrop($event, 2)"
				@dragenter.prevent
				@dragover.prevent
			>
				<div
					v-for="item in getList(2)"
					:key="item.id"
					class="drag-el"
					draggable="true"
					@dragstart="startDrag($event, item)"
				>
					{{ item.title }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
	.drag-zone {
		@apply w-1/2 mx-auto my-[50px] bg-[#ecf0f1] p-3 min-h-[10px];
	}
	.drag-el {
		@apply text-white p-[5px] mb-[10px] bg-accent-300;
	}
	.drag-el {
		@apply last:mb-0;
	}
</style>
