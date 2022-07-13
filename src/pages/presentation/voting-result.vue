<script setup lang="ts"></script>

<template>
	<div
		class="bg-primary-25 h-screen w-full flex justify-center items-center relative"
	>
		<!-- Logo -->
		<div
			class="bg-logo w-[14.75rem] h-[7.9375rem] bg-cover bg-center absolute top-6"
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
			<div class="bg-white px-10 py-4 mx-auto w-[850px] rounded-md">
				<div>
					<!-- main subject title -->
					<div
						class="text-[18px] pb-5 text-gray-900 font-semibold uppercase"
					>
						XIX oliy majlis Qonunchilik palatasining navbatdagi
						yalpi majlisi
					</div>
					<div>
						<!-- main subject title name -->
						<div class="pb-2">
							<h2
								class="text-[16px] pb-3 text-gray-900 uppercase"
							>
								<span>1</span>
								- ovozga qo'yilgan mavzu
							</h2>
							<div class="py-2 pr-[180px]">
								<div class="flex items-center">
									<div>
										<div
											class="w-[45px] h-[45px] circle bg-primary-300 text-[26px] text-white rounded-full flex items-center justify-center"
										>
											1
										</div>
									</div>
									<div class="pl-5 text-[16px] font-medium">
										About new industry of all regions and
										their lives, what do those who are poor
										need and government should provide work
										space
									</div>
								</div>
							</div>
						</div>

						<!-- time -->
						<div class="pb-2">
							<h2
								class="text-[16px] pb-3 text-gray-900 uppercase"
							>
								Ajratilgan vaqt
							</h2>
							<div>
								<AppTimer />
							</div>
						</div>

						<!-- chart result  -->
						<div class="pb-2">
							<h2 class="text-[16px] text-gray-900 uppercase">
								Ovoz berish jarayoni
							</h2>
							<div>
								<VotesCountChart style="width: 400px" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
