<script setup lang="ts"></script>
<template>
	<div
		class="bg-primary-50 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Background -->
		<ParticlesBackground class="absolute w-full -z-0" />

		<!-- LOGO -->
		<div
			class="bg-logo w-[14.75rem] h-[7.9375rem] bg-cover bg-center absolute top-10 z-10"
		></div>

		<!-- Form Content -->

		<form class="z-10">
			<div class="flex flex-col text-sm text-gray-900 w-[25rem]">
				<div class="flex flex-col mb-3">
					<label class="mb-1" for="username">Ism Familya</label>
					<input
						class="border-primary-300 focus: rounded"
						type="text"
						name="username"
					/>
				</div>
				<div class="flex flex-col my-1">
					<label class="mb-1" for="registration"
						>Ro'yxatga olish tokenini kiriting</label
					>
					<input
						class="border-primary-300 rounded"
						type="text"
						name="registration"
					/>
				</div>
				<AppButton
					color="primary"
					block
					class="flex items-center justify-end mt-4"
				>
					Kirish
				</AppButton>
			</div>
		</form>

		<!-- Footer Text -->
		<div class="absolute bottom-6">
			<span class="text-lg text-gray-400">E-voting system</span>
		</div>
	</div>
</template>
