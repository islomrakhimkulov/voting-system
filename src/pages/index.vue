<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
	const indexList = ref([
		{
			id: 1,
			text: 'About new industry of all regions and their lives, what do those who are poor...',
			status: 'active',
		},
		{
			id: 2,
			text: 'About new industry of all regions and their lives, what do those who are poor... ',
			status: 'noactive',
		},
	]);
</script>

<template>
	<div>
		<ParticlesBackground class="absolute w-full -z-10" />
		<AppNavbar />

		<!-- <CurrentTime /> -->
		<div class="mx-auto container gap-4">
			<voting-stepper />

			<div class="my-10 flex justify-center items-center">
				<AppCard />
				<div>
					<VotesCountChart />
				</div>
				<div>
					<GroupedVotingResultChart />
				</div>
			</div>
			<VotingSubjectsList class="my-4" />
			<voting-subjects-accordion class="my-16" />
			<template v-for="question in indexList" :key="question.id">
				<VotingQuestionItem :question="question" active class="my-3" />
			</template>

			<voting-planned-list />

			<div class="py-6">
				<AppTimer />
				<AppTimer active />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
