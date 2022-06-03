<script setup lang="ts"></script>

<template>
	<div
		class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Background -->
		<VotingBackground class="absolute w-full -z-0"></VotingBackground>

		<!-- Logo -->
		<div
			class="bg-logo w-[14.75rem] h-[7.9375rem] bg-cover bg-center absolute top-6"
		></div>

		<!-- Cards -->
		<div class="flex gap-6 z-0">
			<!-- <router-link :to="{ name: 'home' }"> </router-link> -->
			<div
				class="w-[13.75rem] flex flex-col items-center bg-primary-200 rounded p-6"
			>
				<img src="../assets/presentation.svg" alt="" />
				<span class="text-gray-0 mt-4 block">Taqdimot ko’rinishi</span>
			</div>
			<!-- <router-link :to="{ name: 'other-page' }"> </router-link> -->
			<div
				class="w-[220px] flex flex-col items-center bg-primary-200 rounded p-6"
			>
				<img src="../assets/tablet.svg" alt="" />
				<span class="text-gray-0 mt-4 block">Boshqaruv</span>
			</div>

			<!-- <router-link :to="{ name: 'other-page' }"> </router-link> -->
			<div
				class="w-[220px] flex flex-col items-center bg-primary-200 rounded p-6"
			>
				<img src="../assets/admin.svg" alt="" />
				<span class="text-gray-0 mt-4 block">Ovoz Berish</span>
			</div>
		</div>

		<!-- Footer Text -->
		<div class="absolute bottom-6">
			<span class="text-lg text-gray-400">E-voting system</span>
		</div>
	</div>
</template>

<style></style>
