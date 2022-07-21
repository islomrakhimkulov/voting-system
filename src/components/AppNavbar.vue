<script setup lang="ts"></script>

<template>
	<div class="bg-accent-60 py-3">
		<div class="flex mx-auto container gap-4">
			<!-- Logo -->
			<div class="mr-10">
				<img class="h-[4.375rem]" src="../assets/logo.svg" alt="" />
			</div>
			<!-- Buttons here -->
			<div class="flex items-center gap-4">
				<router-link :to="{ name: 'control-voting-list' }">
					<AppButton block color="accent">Yig'ilishlar</AppButton>
				</router-link>
				<router-link :to="{ name: 'control-voting-device-list' }">
					<AppButton color="link">Qurilmalar</AppButton>
				</router-link>
			</div>
		</div>
	</div>
</template>
