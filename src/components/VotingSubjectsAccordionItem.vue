<script setup lang="ts">
	import EditIcon from '@/assets/icons/edit-white.svg?raw';
	import DeleteIcon from '@/assets/icons/delete-white.svg?raw';
	const { accordion } = defineProps({
		accordion: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['openItem', 'deleteItem', 'editItem']);

	const openAccordion = () => {
		emits('openItem');
	};

	//delete from accordion
	const deleteItem = () => {
		emits('deleteItem');
	};

	//  edit accordion item
	const editItem = () => {
		emits('editItem');
	};

	const isOpen = computed(() => {
		return accordion.open ? 'd-block' : 'hidden';
	});
</script>

<template>
	<ul class="p-4">
		<li class="flex items-center justify-between">
			<div class="flex items-center">
				<!-- sorting icon -->
				<div v-if="accordion.draggable">
					<img src="../assets/icons/align.svg" alt="" />
				</div>

				<!-- order number -->
				<p class="px-6">{{ accordion.id + 1 }}</p>

				<!-- subject title -->

				<div class="w-[1000px] mx-auto">
					<div
						class="text-[18px] cursor-pointer"
						@click="openAccordion"
					>
						<p>{{ accordion.subjectTitle }}</p>
					</div>
					<div class="py-2 text-[16px] text-gray-25" :class="isOpen">
						<div>
							{{ accordion.subjectText }}
						</div>

						<div class="py-2 flex items-center justify-end gap-2">
							<!-- set icons here -->
							<AppButton
								@click="editItem"
								color="success"
								size="small"
							>
								<AppIcon
									v-html="EditIcon"
									size="small"
								></AppIcon>
							</AppButton>
							<AppButton
								@click="deleteItem"
								color="danger"
								size="small"
							>
								<AppIcon
									v-html="DeleteIcon"
									size="small"
								></AppIcon>
							</AppButton>
						</div>
					</div>
				</div>
			</div>

			<!-- arrow icon -->
			<div>
				<img
					:class="accordion.open ? 'rotate-180' : 'rotate-0'"
					src="../assets/icons/arrow-down.svg"
					alt=""
				/>
			</div>
		</li>
	</ul>
</template>
