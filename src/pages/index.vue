<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<h1 class="z-10">This is the page we are seeing</h1>
	<VotingBackground class="absolute w-full -z-10" />

	<VotingRegistration />
	<AppNavbar />

	<div class="bg-green-600 py-7">
		<div class="snap-x">
			<div class="snap-center">
				<img src="../assets/admin.svg" alt="" />
			</div>
			<div class="snap-center">
				<img src="../assets/admin.svg" alt="" />
			</div>
			<div class="snap-center">
				<img src="../assets/admin.svg" alt="" />
			</div>
			<div class="snap-center">
				<img src="../assets/admin.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
