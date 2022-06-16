//
<script lang="ts">
	const CHART_LABELS = ['Qatnashgan', 'Qatnashmagan'];

	const BACKGROUND_COLORS = ['#22b870', '#ef67aa'];
</script>

<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue';
	import { DoughnutChart } from 'vue-chart-3';

	const groupVotes = ref([894, 347]);
	const dataLabels1 = ref(['Qatnashgan', 'Qatnashmagan']);

	const options1 = ref({
		responsive: true,
		plugins: {
			legend: {
				display: true,
				padding: 90,
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
				intersect: false,
				tooltip: {
					callbacks: {
						title: () => null,
					},
				},
			},
			datalabels: {
				align: 'top',
				color: 'pink',
				font: {
					weight: 'bold',
					size: 16,
				},
			},
		},
	});

	const resultInfo1 = computed(() => ({
		labels: dataLabels1.value,
		datasets: [
			{
				data: groupVotes.value,
				backgroundColor: ['#22b870', '#ef67aa'],
			},
		],
	}));
</script>
<template>
	<div class="p-5">
		<DoughnutChart
			:chartData="resultInfo1"
			:options="options1"
			ref="doughnutRef"
			class="p-4 mx-5 bg-white rounded shadow"
		/>
	</div>
</template>
