<script lang="ts">
	const CHART_LABELS = [
		"Qo'shilmagan",
		"Be'taraf",
		'Rad etgan',
		'Qatnashmagan',
	];

	const BACKGROUND_COLORS = [
		'#EC4899', //77CEFF
		'#4D46DE', //0079AF
		'#202020', //123E6B
		'#22B870', //97B0C4
	];
</script>

<script setup lang="ts">
	import { BarChart } from 'vue-chart-3';

	const groupVotes = ref([6, 10, 16, 22]);

	const normalizedDatasets = computed(() =>
		CHART_LABELS.map((label, index) => ({
			label,
			data: { x: groupVotes.value[index] },
			backgroundColor: BACKGROUND_COLORS[index],
		}))
	);

	const chartLabels = computed(() =>
		normalizedDatasets.value.map(
			({ label, data: { x: value }, backgroundColor }) => ({
				text: `${label} ${value}`,
				fillStyle: backgroundColor,
			})
		)
	);

	const chartData = computed(() => ({
		labels: undefined,
		datasets: normalizedDatasets.value,
	}));

	const generateLabels = ({ options: { plugins } }: any) => {
		const { generateLabels: _, ...defaults } = plugins.legend.labels;

		return chartLabels.value.map(label =>
			Object.assign({}, defaults, label)
		);
	};

	const chartOptions = computed(() => ({
		responsive: true,
		scales: {
			x: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: true,
				padding: 90,
				position: 'bottom',
				labels: {
					usePointStyle: true,
					color: '#313131',
					pointStyle: 'rect',
					lineWidth: 0,
					generateLabels,
				},
			},
			title: {
				display: true,
				text: 'Umumiy natija',
			},
			tooltip: {
				enabled: true,
				intersect: false,
				callbacks: {
					title: () => undefined,
				},
			},
		},
	}));
</script>

<template>
	<div class="p-5">
		<BarChart
			:chartData="chartData"
			:options="chartOptions"
			class="px-8 py-2 bg-white rounded shadow"
		/>
	</div>
</template>
