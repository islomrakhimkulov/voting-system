//
<script lang="ts">
	const CHART_LABELS = ['Qatnashgan', 'Qatnashmagan'];

	const BACKGROUND_COLORS = ['#22b870', '#ef67aa'];
</script>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { DoughnutChart } from 'vue-chart-3';

	const participants = reactive({ voted: 894, total: 1241 });
	const votedPercentage = computed(() => {
		const percentage = (participants.voted * 100) / participants.total;
		return percentage.toFixed(0);
	});
	const chartValues = computed(() => [
		participants.voted,
		participants.total - participants.voted,
	]);
	const chartData = computed(() => ({
		labels: CHART_LABELS,
		datasets: [
			{
				data: chartValues.value,
				backgroundColor: BACKGROUND_COLORS,
			},
		],
	}));

	const chartLabels = computed(() =>
		CHART_LABELS.map((label, index) => ({
			text: `${label} ${chartValues.value[index]}`,
			fillStyle: BACKGROUND_COLORS[index],
		}))
	);

	const generateLabels = ({ options: { plugins } }: any) => {
		const { generateLabels: _, ...defaults } = plugins.legend.labels;

		return chartLabels.value.map(label =>
			Object.assign({}, defaults, label)
		);
	};

	const chartOptions = ref({
		responsive: true,
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: 'Berilgan ovozlar',
					},
				],
			},
			legend: {
				display: true,
				padding: {
					top: 150,
				},
				position: 'bottom',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					color: '#313131',
					lineWidth: 0,
					generateLabels,
				},
			},
			title: {
				display: true,
				text: 'Ovoz berish natijlari',
			},
			tooltip: {
				enabled: true,
				intersect: false,
				callbacks: {
					title: () => undefined,
				},
			},
		},
	});
</script>
<template>
	<div class="relative p-5">
		<DoughnutChart
			:chartData="chartData"
			:options="chartOptions"
			ref="doughnutRef"
			class="p-2 bg-white rounded shadow"
		/>
		<div
			class="text-[#A5A5A5] text-[18px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10"
		>
			Berilgan ovozlar
		</div>
		<p
			class="text-gray-900 text-[40px] font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
		>
			{{ votedPercentage }}%
		</p>
	</div>
</template>

<style></style>
