<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<div>
		<ParticlesBackground class="absolute w-full -z-10" />
		<AppNavbar />
		<div class="flex mt-8">
			<AppCard />
			<CurrentTime />
			<AppChart />
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
