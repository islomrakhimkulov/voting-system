<script setup lang="ts">
	const { color, src } = defineProps({
		color: {
			type: String,
			default: () => 'default',
			validator: (value: string) =>
				[
					'default',
					'primary',
					'success',
					'danger',
					'warning',
					'info',
				].includes(value),
		},
		src: {
			type: String,
			default: () => '',
		},
	});

	const isAsset = computed(() => !!src);
</script>

<template>
	<i class="app-icon" :class="{ [color]: true, 'is-asset': isAsset }">
		<slot v-if="!isAsset"></slot>
		<img v-else :src="src" />
	</i>
</template>

<style lang="postcss" scoped>
	.app-icon {
		width: 1em;
		height: 1em;
	}

	.app-icon.is-asset {
		background-image: url(v-bind(src));
	}
</style>
