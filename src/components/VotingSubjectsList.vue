<script setup lang="ts">
	const Title = ref([
		{
			subjectTitle: 'Mavzular',
			timeTitle: 'Belgilangan vaqt',
			statusTitle: 'Status',
		},
	]);

	const subjecstList = ref([
		{
			id: 1,
			title: ' About new industry of all regions and their lives, what do those who are poor need and government should provide... ',
			time: '25 may 2022, 16:00',
			status: 'Yakunlangan',
			checked: false,
		},
		{
			id: 2,
			title: ' Subject 2',
			time: '25 may 2022, 17:00',
			status: 'Rejalashtirilgan',
			checked: true,
		},
		{
			id: 3,
			title: 'Subject 3',
			time: '27 may 2022, 14:00',
			status: 'Rejalashtirilgan',
			checked: false,
		},
	]);
</script>

<template>
	<div>
		<table class="table-auto w-full bg-white shadow-lg rounded">
			<thead>
				<tr class="border-b-[1px] border-b-gray-80">
					<th class="px-3 py-2">
						<input
							type="checkbox"
							class="rounded p-3 focus:ring-0 border border-gray-5"
							name=""
							id=""
						/>
					</th>
					<th class="px-3 py-2 text-left">
						{{ Title[0].subjectTitle }}
					</th>
					<th class="px-3 py-2 text-left">
						{{ Title[0].timeTitle }}
					</th>
					<th class="px-3 py-2 text-left pl-6">
						{{ Title[0].statusTitle }}
					</th>
				</tr>
			</thead>
			<tbody>
				<VotingSubjectItem :subjecstList="subjecstList" />
			</tbody>
		</table>
	</div>
</template>
