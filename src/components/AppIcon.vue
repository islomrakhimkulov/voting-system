<script setup lang="ts">
	import * as path from '@/utils/path';

	const urls = import.meta.glob('/src/assets/icons/*.svg', { as: 'raw' });
	const icons = Object.fromEntries(
		Object.entries(urls).map(([k, v]) => [path.getFilename(k), v])
	);

	const { color, src, left, right } = defineProps({
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
		left: {
			type: String,
			default: () => '',
		},
		right: {
			type: String,
			default: () => '',
		},
	});

	const isAsset = computed(() => !!src);
	const classes = computed(() => {
		return {
			'app-icon': true,
			'is-asset': isAsset,
			[color]: true,
			[`is-${left}`]: true,
			[`is-${right}`]: true,
		};
	});
</script>

<template>
	<i :class="classes" v-if="isAsset" v-html="icons[src]"></i>
	<i :class="classes" v-else>
		<slot></slot>
	</i>
</template>

<style lang="postcss">
	.app-icon {
		@apply w-[1em] h-full leading-3;
	}

	.app-icon.is-left {
		@apply mr-7;
	}
	.app-icon.is-right {
		@apply ml-9;
	}

	.app-icon > svg {
		@apply inline w-[1em] h-[1em] !important;
		@apply align-baseline;
	}
</style>
