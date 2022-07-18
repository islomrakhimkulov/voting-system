<script setup lang="ts">
	const openCreateGroupModal = ref(false);
	const openRegistrationModal = ref(false);
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
									@click="openCreateGroupModal = true"
									>Qo'shish</AppButton
								>
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
									@click="openRegistrationModal = true"
									>Qo'shish</AppButton
								>
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

			<!-- opening add group modal  -->
			<Teleport to="body">
				<transition name="modal" v-if="openCreateGroupModal">
					<div class="modal">
						<div
							class="mx-auto mt-[130px] max-w-[1100px] bg-white shadow rounded-md"
						>
							<!-- add subject  -->
							<div class="flex">
								<div
									class="w-1/2 border-r-[1px] border-gray-45"
								>
									<div
										class="bg-gray-3000 py-5 px-7 rounded-t-md"
									>
										<!-- title -->
										<h2
											class="text-[16px] font-semibold uppercase"
										>
											Qurilamalar guruhi
										</h2>

										<!-- form content -->
										<div class="py-2">
											<div class="flex flex-col py-2">
												<input
													class="rounded text-[16px] border-gray-45"
													type="text"
													placeholder="Guruh nomini kiriting"
													name="title"
													id="title"
												/>
											</div>
											<!-- guruhlashtirilgan qurilmalar -->
											<div>
												<h2
													class="text-[16px] font-semibold uppercase"
												>
													Guruhlashtilirilgan
													qurilmalar
												</h2>
												<!-- card group-->
												<div
													class="py-4 flex flex-row items-center flex-wrap gap-2"
												>
													<!-- card -->
													<div
														class="w-[220px] p-2 bg-success-50 text-success-300 border-success-300 border-2 rounded-lg"
													>
														<img
															src="@/assets/icons/group-align.svg"
															alt=""
														/>
														<div
															class="flex flex-col items-center"
														>
															<!-- icon -->
															<img
																class="w-[100px]"
																src="@/assets/phone-tablet.svg"
																alt=""
															/>
															<!-- group name -->
															<h2
																class="text-[16px] font-semibold"
															>
																John Doe's
																tablet
															</h2>
														</div>
														<!-- group status-->
														<p
															class="text-[14px] text-right"
														>
															Guruhlangan
														</p>
													</div>

													<div
														class="w-[220px] p-2 bg-success-50 text-success-300 border-success-300 border-2 rounded-lg"
													>
														<img
															src="@/assets/icons/group-align.svg"
															alt=""
														/>
														<div
															class="flex flex-col items-center"
														>
															<!-- icon -->
															<img
																class="w-[100px]"
																src="@/assets/phone-tablet.svg"
																alt=""
															/>
															<!-- group name -->
															<h2
																class="text-[16px] font-semibold"
															>
																John Doe's
																tablet
															</h2>
														</div>
														<!-- group status-->
														<p
															class="text-[14px] text-right"
														>
															Guruhlangan
														</p>
													</div>
													<div
														class="w-[220px] p-2 bg-success-50 text-success-300 border-success-300 border-2 rounded-lg"
													>
														<img
															src="@/assets/icons/group-align.svg"
															alt=""
														/>
														<div
															class="flex flex-col items-center"
														>
															<!-- icon -->
															<img
																class="w-[100px]"
																src="@/assets/phone-tablet.svg"
																alt=""
															/>
															<!-- group name -->
															<h2
																class="text-[16px] font-semibold"
															>
																John Doe's
																tablet
															</h2>
														</div>
														<!-- group status-->
														<p
															class="text-[14px] text-right"
														>
															Guruhlangan
														</p>
													</div>
													<div
														class="w-[220px] p-2 bg-success-50 text-success-300 border-success-300 border-2 rounded-lg"
													>
														<img
															src="@/assets/icons/group-align.svg"
															alt=""
														/>
														<div
															class="flex flex-col items-center"
														>
															<!-- icon -->
															<img
																class="w-[100px]"
																src="@/assets/phone-tablet.svg"
																alt=""
															/>
															<!-- group name -->
															<h2
																class="text-[16px] font-semibold"
															>
																John Doe's
																tablet
															</h2>
														</div>
														<!-- group status-->
														<p
															class="text-[14px] text-right"
														>
															Guruhlangan
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<!-- bottom buttons -->
									<div
										class="bg-white border-t-[1px] border-gray-45 rounded-b-md"
									>
										<div class="p-5 flex justify-end gap-4">
											<AppButton
												@click="
													openCreateGroupModal = false
												"
												class="w-1/4"
												size="small"
												color="simple"
												>Bekor qilish</AppButton
											>
											<AppButton
												class="w-1/4"
												size="small"
												color="accent"
												>Saqlash</AppButton
											>
										</div>
									</div>
								</div>

								<!-- guruhlashtilrilmagan qurilmalar -->
								<div class="w-1/2">
									<div class="px-7 py-5">
										<!-- title -->
										<h2
											class="text-[16px] font-semibold uppercase"
										>
											Guruhlashtirilmagan qurilmalar
										</h2>
										<div
											class="py-4 flex flex-row flex-wrap gap-2"
										>
											<div
												class="w-[220px] p-2 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
											>
												<img
													src="@/assets/icons/group-align.svg"
													alt=""
												/>
												<div
													class="flex flex-col items-center"
												>
													<!-- icon -->
													<img
														class="w-[100px]"
														src="@/assets/phone-tablet.svg"
														alt=""
													/>
													<!-- group name -->
													<h2
														class="text-[16px] font-semibold"
													>
														John Doe's tablet
													</h2>
												</div>
												<!-- group status-->
												<p
													class="text-[14px] text-right"
												>
													Guruhlanmagan
												</p>
											</div>
											<div
												class="w-[220px] p-2 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
											>
												<img
													src="@/assets/icons/group-align.svg"
													alt=""
												/>
												<div
													class="flex flex-col items-center"
												>
													<!-- icon -->
													<img
														src="@/assets/phone-tablet.svg"
														alt=""
													/>
													<!-- group name -->
													<h2
														class="text-[16px] font-semibold"
													>
														John Doe's tablet
													</h2>
												</div>
												<!-- group status-->
												<p
													class="text-[14px] text-right"
												>
													Guruhlanmagan
												</p>
											</div>
											<div
												class="w-[220px] p-2 bg-gray-30 text-gray-70 border-gray-70 border-2 rounded-lg"
											>
												<img
													src="@/assets/icons/group-align.svg"
													alt=""
												/>
												<div
													class="flex flex-col items-center"
												>
													<!-- icon -->
													<img
														src="@/assets/phone-tablet.svg"
														alt=""
													/>
													<!-- group name -->
													<h2
														class="text-[16px] font-semibold"
													>
														John Doe's tablet
													</h2>
												</div>
												<!-- group status-->
												<p
													class="text-[14px] text-right"
												>
													Guruhlanmagan
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</Teleport>

			<!-- open registration modal -->
			<Teleport to="body">
				<transition name="modal" v-if="openRegistrationModal">
					<div class="modal">
						<div
							class="mx-auto mt-[150px] max-w-[500px] bg-white shadow rounded-md"
						>
							<div
								class="p-4 container mx-auto bg-gray-3000 rounded-t-md"
							>
								<h2
									class="text-sm text-gray-900 font-semibold uppercase"
								>
									Ro'yxatga olish kodi
								</h2>
								<img
									class="mx-auto pt-10"
									src="@/assets/token.svg"
									alt=""
								/>
								<p
									class="text-[16px] text-success-300 py-5 text-left px-20"
								>
									Quyidagi kod orqali foydalanuvchi o'z
									qurilmasiga kirishi mumkin!
								</p>
								<!-- key code -->
								<div
									class="flex flex-row items-center justify-center gap-2 pb-4"
								>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										5
									</div>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										2
									</div>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										3
									</div>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										1
									</div>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										0
									</div>
									<div
										class="px-4 py-2 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
									>
										9
									</div>
								</div>
							</div>
							<div
								class="border-t border-t-[#D9D9D9]-100 bg-white rounded-b-md"
							>
								<div class="py-5 flex justify-end pr-4">
									<app-button
										class="w-1/3"
										@click="openRegistrationModal = false"
										color="simple"
										size="small"
										>chiqish</app-button
									>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</Teleport>
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
