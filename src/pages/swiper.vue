<script setup lang="ts">
	import { Navigation, Pagination } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/vue';

	import 'swiper/css';
	// import 'swiper/css/navigation';
	// import 'swiper/css/pagination';

	// const onSwiper = swiper => {
	// 	console.log(swiper);
	// };
	// const onSlideChange = () => {
	// 	console.log('slide change');
	// };

	// @swiper="onSwiper"
	// 	@slideChange="onSlideChange"

	const dataObj = ref(['slide1', 'slide2']);
</script>

<template>
	<div class="container mx-auto">
		<swiper :slides-per-view="3" :space-between="100">
			<swiper-slide class="h-10 bg-accent-400">Slide 1</swiper-slide>
			<swiper-slide class="h-10 bg-danger-400">Slide 2</swiper-slide>
			<swiper-slide class="h-10 bg-primary-400">Slide 3</swiper-slide>
			<swiper-slide class="h-10 bg-warning-400">Slide 4</swiper-slide>
			<swiper-slide class="h-10 bg-success-400">Slide 5</swiper-slide>
		</swiper>
	</div>
</template>

// navigation import { Navigation, Pagination } from 'swiper'; import { Swiper,
SwiperSlide } from 'swiper/vue'; import 'swiper/css';
