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

	onMounted(() => {
		console.log(doughnutRef.value.chartInstance);
		doughnutRef.value.chartInstance.toBase64Image();
	});

	const options1 = ref({
		responsive: true,
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					color: '#313131',
				},
			},
			title: {
				display: true,
				text: 'Doughnut Chart',
			},
			tooltip: {
				intersect: false,
			},
		},
	});
	const options2 = ref({
		responsive: true,
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					pointStyle: 'rect',
					color: '#262626',
				},
			},
			title: {
				display: true,
				text: 'This is Bar Chart',
			},
			tooltip: {
				intersect: true,
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
			:chartData="resultInfo1"
			:options="options1"
			ref="doughnutRef"
			class="p-4 mx-5 bg-white rounded shadow"
		/>
		<BarChart
			:chartData="resultInfo2"
			:options="options2"
			class="px-8 py-2 bg-white rounded shadow"
		/>
	</div>
</template>
