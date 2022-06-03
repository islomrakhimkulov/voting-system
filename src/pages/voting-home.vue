<script setup lang="ts"></script>
<template>
	<div
		class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Background -->
		<VotingBackground class="absolute w-full -z-0" />

		<!-- LOGO -->
		<div
			class="bg-logo w-[14.75rem] h-[7.9375rem] bg-cover bg-center z-10"
		></div>

		<div class="absolute bottom-6">
			<span class="text-lg text-gray-400">E-voting system</span>
		</div>
	</div>
</template>
