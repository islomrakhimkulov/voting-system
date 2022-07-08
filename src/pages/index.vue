<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<div>
		<ParticlesBackground class="absolute w-full -z-10" />
		<AppNavbar />
		<!-- <CurrentTime /> -->
		<div class="mx-auto container gap-4">
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
			<voting-question-item class="my-4" />
			<voting-question-item class="my-4" active />
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
