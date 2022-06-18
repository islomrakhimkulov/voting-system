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
			<AppCard />🥳
			<div>
				<given-voting-resul-chart />
			</div>
			<div>
				<grouped-voting-result-chart />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
