<script setup lang="ts">
	import PlusIcon from '@/assets/icons/bi_plus-circle.svg?raw';

	const isOpenDevice = ref(false);
	const isOpenToken = ref(false);

	const showDevicesModal = () => {
		isOpenDevice.value = true;
	};
	const hideDevicesModal = () => {
		isOpenDevice.value = false;
	};

	const showTokenCodeModal = () => {
		isOpenToken.value = true;
	};

	const hideTokenCodeModal = () => {
		isOpenToken.value = false;
	};
</script>

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

				<div class="my-3">
					<!-- ungrouped devices -->
					<div>
						<div class="flex justify-between items-center">
							<h2
								class="text-[18px] text-gray-900 font-semibold uppercase"
							>
								Guruhlashtirilmagan Qurilmalar
							</h2>
							<div>
								<AppButton
									color="accent"
									@click="showDevicesModal"
								>
									<AppIcon v-html="PlusIcon" position="left">
									</AppIcon
									>Qo'shish
								</AppButton>
							</div>
						</div>

						<!-- devices card group -->

						<div class="py-3 flex flex-row gap-5 flex-wrap">
							<!-- cards group -->
							<div
								class="w-[270px] p-3 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
							>
								<div class="flex flex-col items-center">
									<!-- icon -->
									<img
										src="@/assets/phone-tablet.svg"
										alt=""
									/>
									<!-- group name -->
									<h2 class="text-[16px] font-semibold">
										John Doe's tablet
									</h2>
								</div>
								<!-- group status-->
								<p class="text-[14px] text-right">
									Guruhlanmagan
								</p>
							</div>

							<div
								class="w-[270px] p-3 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
							>
								<div class="flex flex-col items-center">
									<img
										src="@/assets/phone-tablet.svg"
										alt=""
									/>
									<!-- group name -->
									<h2 class="text-[16px] font-semibold">
										John Doe's tablet
									</h2>
								</div>
								<!-- group status-->
								<p class="text-[14px] text-right">
									Guruhlanmagan
								</p>
							</div>

							<div
								class="w-[270px] p-3 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
							>
								<div class="flex flex-col items-center">
									<img
										src="@/assets/phone-tablet.svg"
										alt=""
									/>
									<!-- group name -->
									<h2 class="text-[16px] font-semibold">
										John Doe's tablet
									</h2>
								</div>
								<!-- group status-->
								<p class="text-[14px] text-right">
									Guruhlanmagan
								</p>
							</div>
						</div>
					</div>
					<!-- groups name -->
					<div class="">
						<div class="flex justify-between items-center">
							<h2
								class="text-[18px] text-gray-900 font-semibold uppercase"
							>
								Guruhlar nomi
							</h2>
							<div>
								<AppButton
									color="accent"
									@click="showTokenCodeModal"
								>
									<AppIcon v-html="PlusIcon" position="left">
									</AppIcon>
									Qo'shish
								</AppButton>
							</div>
						</div>
						<!-- devices named card group  -->
						<div class="flex flex-row flex-wrap gap-5 py-4">
							<!-- cards -->
							<div
								class="w-[270px] p-2 bg-primary-300 border-2 border-primary-400 text-white rounded-md"
							>
								<!-- icon -->
								<img
									class="w-[30px]"
									src="@/assets/icons/group-icon.svg"
									alt=""
								/>
								<h2
									class="text-[20px] py-3 font-semibold text-center uppercase"
								>
									Yuqori palata
								</h2>
								<p class="text-[16px] text-right">
									Qurilamalar soni: 15
								</p>
							</div>

							<div
								class="w-[270px] p-2 bg-primary-300 border-2 border-primary-400 text-white rounded-md"
							>
								<!-- icon -->
								<img
									class="w-[30px]"
									src="@/assets/icons/group-icon.svg"
									alt=""
								/>
								<h2
									class="text-[20px] py-3 font-semibold text-center uppercase"
								>
									Quyi palata
								</h2>
								<p class="text-[16px] text-right">
									Qurilamalar soni: 15
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- devices control modal -->
			<VotingDevicesModal
				:isOpen="isOpenDevice"
				@close="hideDevicesModal"
			/>

			<!-- token code modal -->
			<VotingTokenCode
				:isOpen="isOpenToken"
				@close="hideTokenCodeModal"
			/>
		</div>
	</div>
</template>
<style>
	.modal {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease;
	}

	.modal-enter-active,
	.modal-leave-active {
		transition: opacity 0.5s ease;
	}

	.modal-enter-from,
	.modal-leave-to {
		opacity: 0;
	}
</style>
