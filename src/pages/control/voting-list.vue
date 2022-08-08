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

				<swiper :slides-per-view="4" :space-between="10">
					<swiper-slide>
						<AppCard />
					</swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
					<swiper-slide><AppCard /></swiper-slide>
				</swiper>

				<div class="flex items-center justify-between my-5">
					<div>
						<h2 class="text-[18px] font-bold py-2 uppercase">
							Yig'ilishlar jadvali
						</h2>
						<div class="flex items-center pb-3">
							<router-link
								:to="{ name: 'control-create-subject' }"
								class="mr-3 text-[15px] text-accent-300 font-semibold"
							>
								Rejalashtirilgan
							</router-link>
							<router-link
								:to="{ name: 'control-voting-full-result' }"
								class="text-gray-15 text-[15px] font-semibold"
							>
								Yakunlangan
							</router-link>
						</div>
					</div>
					<router-link :to="{ name: 'control-create-subject' }">
						<AppButton color="accent">
							<AppIcon v-html="PlusIcon" position="left">
							</AppIcon>
							Yaratish
						</AppButton></router-link
					>
				</div>

				<!-- meeting shcudule -->
				<VotingSubjectsList />
			</div>
		</div>
	</div>
</template>
