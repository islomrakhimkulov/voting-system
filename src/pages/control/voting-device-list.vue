<script setup lang="ts"></script>

<template>
	<div class="relative">
		<AppNavbar />
		<!-- wave background svg icon -->
		<div
			class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
		></div>
		<div class="container mx-auto py-4">
			<!-- devices group -->
			<div>
				<div>
					<h2 class="text-sm text-gray-900 uppercase">Qurilamalar</h2>
				</div>

				<div class="my-5">
					<!-- ungrouped devices -->
					<div>
						<h2
							class="text-[18px] text-gray-900 font-semibold uppercase"
						>
							Guruhlashtirilmagan Qurilmalar
						</h2>
						<!-- devices card group -->

						<div>
							<!-- card -->
							<div class="w-[350px] rounded">
								<img
									class=""
									src="@/assets/phone-tablet.svg"
									alt=""
								/>
							</div>
						</div>
					</div>
					<!-- groups name -->
					<div>
						<h2
							class="text-[18px] text-gray-900 font-semibold uppercase"
						>
							Guruhlar nomi
						</h2>
						<!-- devices named card group  -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
