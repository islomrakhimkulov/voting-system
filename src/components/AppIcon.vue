<script setup lang="ts">
	import * as path from '@/utils/path';

	// const urls = import.meta.glob('/src/assets/icons/*.svg');

	// const icons = Object.fromEntries(
	// 	Object.entries(urls).map(([k, v]) => [path.getFilename(k), v])
	// );

	const { color, src, position } = defineProps({
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
		position: {
			type: String,
			default: () => 'default',
			validator: (value: string) =>
				['default', 'left', 'right'].includes(value),
		},
		src: {
			type: String,
			default: () => '',
		},
	});

	const svgIconCode = await (
		await fetch(`/src/assets/icons/${src}.svg?raw`)
	).text();

	const svgIconContent = computed(() => svgIconCode);

	const isAsset = computed(() => !!src);
	const classes = computed(() => {
		return {
			'app-icon': true,
			'is-asset': isAsset,
			[color]: true,
			[`is-${position}`]: true,
		};
	});
</script>

<template>
	<i :class="classes" v-html="svgIconContent"></i>
	<i :class="classes">
		<slot></slot>
	</i>
</template>

<style lang="postcss">
	.app-icon {
		@apply w-[1em] h-full leading-3;
	}

	.app-icon.is-left {
		@apply mr-2;
	}

	.app-icon.is-right {
		@apply ml-2;
	}

	.app-icon > svg {
		@apply inline w-[1em] h-[1em] !important;
		@apply align-baseline;
	}
</style>
