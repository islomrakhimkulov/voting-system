<script setup lang="ts">
	import { DoughnutChart } from 'vue-chart-3';

	const testData = {
		labels: ['Qarshi', 'Toshkent', 'Samarqand', 'Buxoro', 'Navoiy'],
		datasets: [
			{
				label: 'Voting',
				data: [30, 40, 60, 70, 16],
				backgroundColor: [
					'#EC4899', //77CEFF
					'#4D46DE', //0079AF
					'#202020', //123E6B
					'#22B870', //97B0C4
					'#A5C8ED',
				],
			},
		],
	};
</script>
<template>
	<div class="bg-primary-600 h-40">
		<DoughnutChart :chartData="testData" />
	</div>
</template>
