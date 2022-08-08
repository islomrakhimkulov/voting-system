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
		'prev',
		'next',
		'transparent',
		'special',
	];
	const SIZES = [
		'default',
		'small',
		'medium',
		'large',
		'extra-large',
		'special',
	];
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
		@apply bg-gray-100 hover:bg-gray-400 text-white;
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
		@apply bg-danger-300 hover:bg-danger-400 text-white;
	}
	.app-button.is-link {
		@apply bg-transparent hover:bg-accent-300 hover:text-white hover:font-normal;
	}
	.app-button.is-simple {
		@apply bg-transparent bg-white text-gray-35 hover:font-normal rounded border-[1px];
	}
	.app-button.is-small {
		@apply px-2 py-1 h-10 text-sm;
	}
	.app-button.is-special {
		@apply px-2 h-[35px] text-sm;
	}
	.app-button.is-medium {
		@apply text-base h-[3rem] py-2 px-6;
	}
	.app-button.is-large {
		@apply text-lg  py-6 px-6;
	}
	.app-button.is-normal {
		@apply text-base h-[3rem] py-6 px-6;
	}
	.app-button.is-extra-large {
		@apply text-4xl h-[3rem] py-2 px-6;
	}
	.app-button.is-prependIcon {
		@apply mr-7;
	}

	/* main buttons */

	/* disabled button */
	.app-button.is-disabled {
		@apply bg-gray-2000 text-gray-1500 border-gray-1500  border-2;
	}

	/* next button */
	.app-button.is-next {
		@apply bg-gray-2500 text-gray-1000 border-gray-1500 border-2;
	}
	/* prev button */
	.app-button.is-prev {
		@apply bg-gray-2500 text-gray-1000 border-gray-1500 border-2;
	}
</style>
