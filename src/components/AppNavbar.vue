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
				<AppButton block color="accent">Yig'ilishlar</AppButton>
				<AppButton size="normal">Qurilmalar</AppButton>
				<AppButton color="link">Qurilmalar</AppButton>
				<AppButton color="success" class="flex items-center">
					<AppIcon src="bi_plus-circle" />
					Qurilmalar
				</AppButton>
				<AppButton color="warning">
					<template #prepend>(Chapda) </template>
					Qurilmalar</AppButton
				>
			</div>
		</div>
	</div>
</template>
