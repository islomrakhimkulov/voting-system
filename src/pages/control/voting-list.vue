<script setup lang="ts">
	import PlusIcon from '@/assets/icons/bi_plus-circle.svg?raw';
	import { Navigation, Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';

	import 'swiper/css';
</script>

<template>
	<div class="relative">
		<AppNavbar />
		<div class="container mx-auto py-4">
			<!-- wave background svg icon -->
			<div
				class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
			></div>

			<div class="">
				<h4 class="text-[16px] text-gray-900 uppercase">
					Yig'ilishlar
				</h4>

				<h2 class="text-[18px] font-bold py-2 uppercase">
					<span
						class="rounded-full inline-block bg-success-300 w-[12px] h-[12px]"
					></span>
					Joriy yigilishlar
				</h2>

				<!--  carousel section -->
				<!-- <AppCard /> -->

				<swiper :slides-per-view="4" :space-between="10">
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
				</swiper>

				<div class="flex items-center justify-between my-6">
					<div>
						<h2 class="text-[18px] font-bold py-2 uppercase">
							Yig'ilishlar jadvali
						</h2>
						<div class="flex">
							<p
								class="text-accent-300 text-[16px] font-semibold"
							>
								Rejalashtirilgan
							</p>
							<p
								class="text-gray-15 text-[16px] pl-5 font-semibold"
							>
								Yakunlangan
							</p>
						</div>
					</div>

					<AppButton color="accent">
						<AppIcon v-html="PlusIcon" position="left"></AppIcon>
						Yaratish</AppButton
					>
				</div>

				<!-- meeting shcudule -->
				<VotingSubjectsList />
			</div>
		</div>
	</div>
</template>
