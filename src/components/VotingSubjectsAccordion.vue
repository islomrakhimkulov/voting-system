<script setup lang="ts">
	const accordionInfo = ref([
		{
			id: 1,
			subjectTitle:
				'About new industry of all regions and their lives, what do those who are poor need and government should provide work space in order to help out',
			subjectText:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			open: false,
		},
		{
			id: 2,
			subjectTitle: 'Accordion 2',
			subjectText: 'some lorem here 222',
			open: false,
		},
		{
			id: 3,
			subjectTitle: 'Accordion 3',
			subjectText: 'some lorem here 33',
			open: true,
		},
	]);

	const activeItem = ref<number>(0);

	const openItem = (item: number) => {
		activeItem.value = item;

		accordionInfo.value.map((accordion, i) => {
			if (item === i) {
				accordion.open = !accordion.open;
			} else {
				accordion.open = false;
			}

			return accordion;
		});
	};
</script>

<template>
	<div class="bg-white p-4 shadow rounded">
		<template v-for="(accordion, i) in accordionInfo" :key="accordion.id">
			<VotingSubjectsAccordionItem
				:accordion="accordion"
				@click="openItem(i)"
			/>
		</template>
	</div>
</template>
