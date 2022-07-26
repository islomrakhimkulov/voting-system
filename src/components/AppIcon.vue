<script lang="ts">
	const SIZES = ['default', 'small', 'medium', 'large', 'extra-large'];
</script>

<script setup lang="ts">
	import * as path from '@/utils/path';

	const { color, position, size } = defineProps({
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
		size: {
			type: String,
			default: () => 'default',
			validator: (value: string) => SIZES.includes(value),
		},
	});

	const classes = computed(() => {
		return {
			'app-icon': true,
			[color]: true,
			[`is-${position}`]: true,
			[`is-${size}`]: true,
		};
	});
</script>

<template>
	<i :class="classes" class="app-icon">
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
	/* main feature at the bottom */
	.app-icon > svg {
		@apply inline w-[1em] h-[1em] !important;
		@apply align-baseline;
	}
	.app-icon.is-small {
		@apply text-2xl;
	}
	.app-icon.is-medium {
		@apply text-3xl;
	}
	.app-icon.is-large {
		@apply text-4xl;
	}
</style>
