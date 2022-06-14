<script setup lang="ts">
	import { ref, computed } from 'vue';

	const { modelValue: givenTime, reverse: isReverse } = defineProps({
		modelValue: {
			type: Date,
			default: () => null,
		},
		reverse: {
			type: Boolean,
			default: () => false,
		},
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
	<section class="flex text-5xl font-semibold text-accent-600 justify-center">
		<div class="hours mx-2 relative">{{ time.hours }}</div>
		<span class="leading-snug">:</span>
		<div class="minutes mx-2 relative">{{ time.minutes }}</div>
		<span class="leading-snug">:</span>
		<div class="seconds ml-2 relative">{{ time.seconds }}</div>
	</section>
</template>
