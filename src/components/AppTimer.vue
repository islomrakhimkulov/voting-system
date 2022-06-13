<script lang="ts">
	const DATE = ['date', 'hour', 'minute', 'secund', 'millisecund'];
</script>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import dayjs from '@/plugins/dayjs';

	const date_example = ref<Date | null>(null);

	const fetch = async () => {
		date_example.value = new Date();
	};

	const date = computed<string>((): string => {
		if (date_example.value === null) {
			return '-';
		}

		return dayjs(date_example.value)
			.locale('uz-latn')
			.from(dayjs('13-06-2022 00:00:00', 'DD-MM-YYYY HH:mm:ss'));
	});

	onMounted(() => fetch());
</script>

<template>
	<section class="flex text-5xl font-semibold text-accent-600 justify-center">
		<div class="hours mx-2 relative">06</div>
		<span class="leading-snug">:</span>
		<div class="minutes mx-2 relative">30</div>
		<span class="leading-snug">:</span>
		<div class="seconds ml-2 relative">02</div>
	</section>
	<div>
		<h2>
			{{ date }}
		</h2>
	</div>
</template>
