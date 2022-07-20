<script setup lang="ts">
	import * as path from '@/utils/path';

	const { color, position } = defineProps({
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
	});

	const classes = computed(() => {
		return {
			'app-icon': true,
			[color]: true,
			[`is-${position}`]: true,
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

	.app-icon > svg {
		@apply inline w-[1em] h-[1em] !important;
		@apply align-baseline;
	}
</style>
