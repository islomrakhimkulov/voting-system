<script lang="ts">
	const COLORS = [
		'default',
		'primary',
		'accent',
		'success',
		'danger',
		'warning',
		'info',
		'link',
		'disabled',
		'simple',
	];
	const SIZES = ['default', 'small', 'medium', 'large', 'extra-large'];
</script>

<script lang="ts" setup>
	import { computed } from 'vue';

	const { color, size, active, isBlock } = defineProps({
		color: {
			type: String,
			default: () => 'default',
			validator: (value: string) => COLORS.includes(value),
		},
		size: {
			type: String,
			default: () => 'medium',
			validator: (value: string) => SIZES.includes(value),
		},
		active: {
			type: Boolean,
			default: () => false,
		},
		disabled: {
			type: Boolean,
			default: () => false,
		},
		isBlock: {
			type: Boolean,
			default: () => false,
		},
		prependIcon: {
			type: Boolean,
			default: () => false,
		},
		appendIcon: {
			type: Boolean,
			default: () => false,
		},
	});

	const classes = computed(() => {
		return {
			'active-button': active,
			block: isBlock,
			[`is-${color}`]: true,
			[`is-${size}`]: true,
		};
	});
</script>

<template>
	<button
		class="app-button text-sm rounded font-normal uppercase transition-colors duration-300"
		:class="classes"
		type="button"


		
	>
		<span class="app-button-content flex justify-center items-center">
			<slot></slot>
		</span>
	</button>
</template>

<style lang="postcss">
	.app-button.is-default {
		@apply bg-gray-50 hover:bg-gray-200 text-black;
	}
	.app-button.is-primary {
		@apply bg-primary-200 hover:bg-primary-400 text-white;
	}
	.app-button.is-secondary {
		@apply bg-secondary-200 hover:bg-secondary-400;
	}
	.app-button.is-gray {
		@apply bg-gray-200 hover:bg-gray-400 text-black;
	}
	.app-button.is-accent {
		@apply bg-accent-300 hover:bg-accent-400 text-white;
	}
	.app-button.is-success {
		@apply bg-success-200 hover:bg-success-400 text-white;
	}
	.app-button.is-warning {
		@apply bg-warning-200 hover:bg-warning-400 text-black;
	}
	.app-button.is-danger {
		@apply bg-danger-200 hover:bg-danger-400 text-white;
	}
	.app-button.is-link {
		@apply bg-transparent font-semibold hover:bg-accent-300 hover:text-white hover:font-normal;
	}
	.app-button.is-small {
		@apply text-sm;
	}
	.app-button.is-medium {
		@apply text-base h-[3rem] py-2 px-6;
	}
	.app-button.is-large {
		@apply text-lg h-[3rem] py-2 px-6;
	}
	.app-button.is-normal {
		@apply text-base h-[3rem] py-2 px-6;
	}
	.app-button.is-extra-large {
		@apply text-4xl h-[3rem] py-2 px-6;
	}
	.app-button.is-prependIcon {
		@apply mr-7;
	}

	/* main buttons */

	/* disabled buttons */
	.app-button.is-disabled {
		@apply bg-gray-2000 text-gray-1500 border-gray-1500  border-2;
	}
</style>
