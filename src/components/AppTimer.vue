<script lang="ts">
	const COLORS = ['white', 'black', 'accent'];
</script>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	const {
		modelValue: givenTime,
		reverse: isReverse,
		active,
		disabled,
	} = defineProps({
		modelValue: {
			type: Date,
			default: () => null,
		},
		reverse: {
			type: Boolean,
			default: () => false,
		},
		active: {
			type: Boolean,
			default: () => false,
		},
		disabled: {
			type: Boolean,
			default: () => 'default',
		},
	});

	const classes = computed(() => {
		return {
			'active-color': active,
			[`is-${disabled}`]: disabled,
		};
	});

	const currentTime = ref<Date | null>(null);
	const timer = ref<number | null>(null);

	const remainingMilliseconds = computed<number>((): number => {
		if (givenTime === null) {
			return 0;
		}

		const now = currentTime.value ?? new Date();
		let difference = givenTime.getTime() - now.getTime();

		if (isReverse) {
			difference = now.getTime() - givenTime.getTime();
		}

		if (difference < 0) {
			return 0;
		}

		return difference;
	});

	const time = computed(
		(): { hours: string; minutes: string; seconds: string } => {
			const milliseconds = remainingMilliseconds.value;
			const hours = Math.floor(milliseconds / (60 * 60 * 1000));
			const minutes = Math.floor(milliseconds / (60 * 1000)) % 60;
			const seconds = Math.floor(milliseconds / 1000) % 60;

			return {
				hours: hours.toString().padStart(2, '0'),
				minutes: minutes.toString().padStart(2, '0'),
				seconds: seconds.toString().padStart(2, '0'),
			};
		}
	);

	const start = () => {
		stop();

		timer.value = setInterval(update, 1000);
	};
	const stop = () => {
		if (timer.value === null) {
			return;
		}

		clearInterval(timer.value);

		timer.value = null;
	};

	const update = () => {
		currentTime.value = new Date();

		if (!givenTime) {
			return;
		}

		if (givenTime <= currentTime.value === isReverse) {
			return;
		}

		stop();
	};

	onMounted(start);
	onUnmounted(stop);
</script>

<template>
	<section
		class="app-timer flex text-5xl font-semibold text-gray-900 justify-center"
		:class="classes"
	>
		<div class="hours mx-2 relative">
			{{ time.hours }}
			<div class="text-[16px] timer-indicator">soat</div>
		</div>

		<span class="leading-snug">:</span>
		<div class="minutes mx-2 relative">
			{{ time.minutes }}
			<div class="text-[16px] timer-indicator">daqiqa</div>
		</div>

		<span class="leading-snug">:</span>
		<div class="seconds ml-2 relative">
			{{ time.seconds }}
			<div class="text-[16px] timer-indicator">soniya</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.app-timer.active-color {
		@apply text-accent-600;
	}
	/* .timer-indicator {
		@apply text-gray-90;
	} */
	.app-timer.is-true {
		@apply bg-gray-80 px-8 pb-2 text-white rounded inline-flex;
	}
</style>
