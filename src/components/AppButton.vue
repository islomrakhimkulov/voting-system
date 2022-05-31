<script setup lang="ts">
	useHead({
		title: 'App Button',
	});
</script>

<template>
	<div>
		<button
			class="bg-primary-300 text-gray-0 py-3 px-11 rounded uppercase"
			type="button"
		>
			<slot name="main-btn"></slot>
		</button>
	</div>
</template>

<route lang="yaml">
name: home
</route>
