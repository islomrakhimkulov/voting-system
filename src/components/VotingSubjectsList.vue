<script setup lang="ts">
	const prop = defineProps({});
	const subjectListTitles = ref({
		subjectTitle: 'Mavzular',
		timeTitle: 'Belgilangan vaqt',
		statusTitle: 'Status',
	});

	const subjectList = ref([
		{
			id: 1,
			title: ' About new industry of all regions and their lives, what do those who are poor need and government should provide... ',
			time: '25 may 2022, 16:00',
			status: 'Yakunlangan',
			checked: false,
		},
		{
			id: 2,
			title: ' Subject 2 ',
			time: '25 may 2022, 14:00',
			status: 'Rejalashtirilgan',
			checked: false,
		},
		{
			id: 3,
			title: ' Subject 3',
			time: '25 may 2022, 17:00',
			status: 'Rejalashtirilgan',
			checked: true,
		},
	]);

	const addSubject = () => {};
</script>

<template>
	<div>
		<table class="table-auto w-full bg-white shadow rounded">
			<thead>
				<tr class="border-b-[1px] border-b-gray-40">
					<th class="px-3 py-3">
						<input
							type="checkbox"
							class="rounded p-2 focus:ring-0 border border-gray-5"
							name=""
							id=""
						/>
					</th>
					<th class="px-3 py-3 text-left">
						{{ subjectListTitles.subjectTitle }}
					</th>
					<th class="px-3 py-3 text-left">
						{{ subjectListTitles.timeTitle }}
					</th>
					<th class="px-3 py-3 text-left pl-6">
						{{ subjectListTitles.statusTitle }}
					</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="subject in subjectList" :key="subject.id">
					<VotingSubjectItem :subject="subject" />
				</template>
			</tbody>
		</table>
	</div>
</template>
