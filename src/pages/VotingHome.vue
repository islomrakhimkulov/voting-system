<script setup lang="ts"></script>
<template>
	<div
		class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Background -->
		<VotingBackground class="absolute w-full -z-0" />

		<!-- LOGO -->
		<div class="bg-logo w-[236px] h-[127px] bg-cover bg-center z-10"></div>

		<swipper></swipper>

		<div class="absolute bottom-6">
			<span class="text-gray-400">E-voting system</span>
		</div>
	</div>
</template>
