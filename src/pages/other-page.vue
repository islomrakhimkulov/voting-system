<script setup lang="ts">
    useHead({
        title: 'Other Pages',
    });
</script>

<template>
	<div>
		<p class="text-primary-500">{{ $t('pages.other.desc') }}</p>
		<router-link
			:to="{ name: 'home' }"
			class="mt-5 hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
			>{{ $t('pages.home') }}</router-link
		>
		<h2 class="text-secondary-400">Hello</h2>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
    name: other-page
</route>