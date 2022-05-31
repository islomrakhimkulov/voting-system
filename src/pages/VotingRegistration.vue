<script setup lang="ts"></script>
<template>
	<div
		class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Background -->
		<VotingBackground class="absolute w-full -z-0"></VotingBackground>

		<!-- LOGO -->
		<div
			class="bg-logo w-[236px] h-[127px] bg-cover bg-center absolute top-10 z-10"
		></div>

		<!-- Form Content -->

		<form class="z-10">
			<div class="flex flex-col text-sm text-gray-900 w-[400px]">
				<div class="flex flex-col mb-3">
					<label class="mb-1" for="username">Ism Familya</label>
					<input
						class="border-primary-300 focus: rounded"
						type="text"
						name="username"
					/>
				</div>
				<div class="flex flex-col my-1">
					<label class="mb-1" for="registrration"
						>Ro'yxatga olish tokenini kiriting</label
					>
					<input
						class="border-primary-300 rounded"
						type="text"
						name="registration"
					/>
				</div>
				<AppButton class="flex items-center justify-end mt-4">
					<template #main-btn> Kirish </template>
				</AppButton>
			</div>
		</form>

		<!-- Footer Text -->
		<div class="absolute bottom-6">
			<span class="text-[18px] text-gray-400">E-voting system</span>
		</div>
	</div>
</template>
