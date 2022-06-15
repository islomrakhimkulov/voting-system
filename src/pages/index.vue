<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<div>
		<ParticlesBackground class="absolute w-full -z-10" />
		<AppNavbar />
		<div class="my-10">
			<AppCard />
			<!-- <CurrentTime /> -->
			<div>
				<AppChart />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
