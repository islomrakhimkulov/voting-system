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
				<div class="flex">
					<div class="max-w-[35vw]">
						<grouped-voting-result-chart />
					</div>
					<div class="max-w-[35vw]">
						<given-voting-resul-chart />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
