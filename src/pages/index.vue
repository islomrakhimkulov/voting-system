<script setup lang="ts">
	useHead({
		title: 'E-voting system',
	});
</script>

<template>
	<div>
		<VotingBackground class="absolute w-full -z-10" />
		<VotingRegistration />
		<AppNavbar />
	</div>
</template>

<route lang="yaml">
name: home
</route>
