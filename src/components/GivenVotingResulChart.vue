//
<script lang="ts">
	const CHART_LABELS = ['Qatnashgan', 'Qatnashmagan'];

	const BACKGROUND_COLORS = ['#22b870', '#ef67aa'];
</script>

<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue';
	import { DoughnutChart } from 'vue-chart-3';

	const groupVotes = ref([894, 347]);
	1;
	const chartData = computed(() => ({
		labels: CHART_LABELS,
		datasets: [
			{
				data: groupVotes.value,
				backgroundColor: BACKGROUND_COLORS,
			},
		],
	}));

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
				},
			},
			title: {
				display: true,
				text: 'Ovoz berish natijlari',
			},
			tooltip: {
				enabled: true,
				intersect: false,
				tooltip: {
					callbacks: {
						label: (tooltipItem, data) => {
							return `${data.labels[tooltipItem.index]}: ${
								data.datasets[0].data[tooltipItem.index]
							}%`;
						},
					},
				},
			},
		},
	});
</script>
<template>
	<div class="p-5">
		<DoughnutChart
			:chartData="chartData"
			:options="chartOptions"
			ref="doughnutRef"
			class="p-4 mx-5 bg-white rounded shadow"
		/>
	</div>
</template>
