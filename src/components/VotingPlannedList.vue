<script setup lang="ts">
	const plannedList = ref([
		{
			id: 1,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '1:59',
			status: 'End Vote',
			checked: false,
			count: '50',
		},
		{
			id: 2,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: false,
			count: '0',
		},
		{
			id: 3,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: true,
			count: '0',
		},
		{
			id: 4,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: false,
			count: '0',
		},
		{
			id: 5,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: true,
			count: '0',
		},
		{
			id: 6,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: false,
			count: '0',
		},
		{
			id: 7,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: true,
			count: '0',
		},
		{
			id: 8,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: false,
			count: '0',
		},
		{
			id: 9,
			title: 'About new industry of all regions and their lives, what do those who',
			time: '02:00',
			status: 'Open Vote',
			checked: true,
			count: '0',
		},
	]);
</script>

<template>
	<div>
		<table class="table-auto bg-white w-[700px] shadow rounded">
			<tbody>
				<template v-for="subject in plannedList" :key="subject.id">
					<VotingPlannedItem :subject="subject" />
				</template>
			</tbody>
		</table>
	</div>
</template>
