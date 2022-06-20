<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<div>
		<ParticlesBackground class="absolute w-full -z-10" />
		<AppNavbar />

		<div class="my-10 flex justify-center items-center">
			<AppCard />
			<div>
				<VotesCountChart />
			</div>
			<div>
				<GroupedVotingResultChart />
			</div>
			<div>
				<VotingList />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
