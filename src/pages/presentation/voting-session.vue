<script setup lang="ts"></script>

<template>
	<div
		class="bg-primary-25 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Logo -->
		<div
			class="bg-logo w-[14.75rem] h-[7.9375rem] ml-[100px] bg-cover bg-center absolute top-3"
		></div>

		<div class="container mx-auto">
			<!-- wave top background svg icon -->
			<div
				class="fixed bottom-[-320px] right-[-320px] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
			></div>
			<!-- wave bottom background svg icon -->
			<div
				class="fixed top-[-320px] left-[-320px] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
			></div>

			<!-- main content -->
			<div class="mx-auto w-[800px] mt-[100px]">
				<div class="uppercase">
					<h2 class="text-[20px] text-gray-900 font-semibold">
						XIX Oliy Majlis Qonunchilik palatasining navbatdagi
						yalpi majlisi
					</h2>
					<p class="text-[16px] text-gray-300">joriy yig’ilishlar</p>
				</div>
				<div>
					<VotingStepper />
				</div>
			</div>
		</div>
	</div>
</template>
