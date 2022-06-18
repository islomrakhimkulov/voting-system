<script setup lang="ts">
	import { computed, onMounted, ref } from 'vue';
	import {
		DoughnutChart,
		BarChart,
		PieChart,
		PolarAreaChart,
	} from 'vue-chart-3';

	const doughnutRef = ref();
	const dataValues1 = ref([894, 347]);
	const dataValues2 = ref([6, 10, 16, 22]);
	const dataLabels1 = ref(['Qatnashgan', 'Qatnashmagan']);
	const dataLabels2 = ref([
		"Qo'shilmagan",
		"Be'taraf",
		'Rad etgan',
		'Qatnashmagan',
	]);

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
	const options2 = ref({
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					usePointStyle: true,
					pointStyle: 'rect',
					color: '#262626',
				},
			},
			title: {
				display: true,
				text: 'Umumiy natija',
			},
			tooltip: {
				intersect: true,
			},
		},
		scales: {
			x: {
				grid: {
					offset: true,
				},
			},
		},
	});

	const resultInfo1 = computed(() => ({
		labels: dataLabels1.value,
		datasets: [
			{
				data: dataValues1.value,
				backgroundColor: ['#22b870', '#ef67aa'],
			},
		],
	}));

	const resultInfo2 = computed(() => ({
		labels: dataLabels2.value,
		datasets: [
			{
				data: dataValues2.value,
				backgroundColor: [
					'#EC4899', //77CEFF
					'#4D46DE', //0079AF
					'#202020', //123E6B
					'#22B870', //97B0C4
				],
				borderRadius: 3,
			},
		],
	}));
</script>
<template>
	<div class="flex justify-center">
		<DoughnutChart
			style="height: 50vh; width: 50vh"
			:chartData="resultInfo1"
			:options="options1"
			ref="doughnutRef"
			class="p-4 mx-5 bg-white rounded shadow"
		/>
	</div>
</template>
