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
				<AppButton block color="accent" medium>Yig'ilishlar</AppButton>
				<AppButton size="normal" large>Qurilmalar</AppButton>
				<AppButton color="link" small>Qurilmalar</AppButton>
				<AppButton color="success" prependIcon>
					<AppIcon src="bi_plus-circle" />
					Qurilmalar
					<AppIcon src="bi_plus-circle" />
				</AppButton>
			</div>
		</div>
	</div>
</template>
