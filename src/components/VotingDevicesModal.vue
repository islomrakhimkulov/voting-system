<script setup lang="ts">
	const props = defineProps({
		isOpen: {
			type: Boolean,
			default: false,
		},
	});

	const emit = defineEmits(['close']);

	const closeModal = () => {
		emit('close');
	};
</script>

<template>
	<div>
		<!-- opening add group modal  -->
		<Teleport to="body">
			<transition name="modal" v-if="isOpen">
				<div class="modal">
					<div
						class="mx-auto mt-[130px] max-w-[1100px] bg-white shadow rounded-md"
					>
						<!-- add subject  -->
						<div class="flex">
							<div class="w-1/2 border-r-[1px] border-gray-45">
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
												Guruhlashtilirilgan qurilmalar
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
															John Doe's tablet
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
															John Doe's tablet
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
															John Doe's tablet
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
															John Doe's tablet
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
											@click="closeModal"
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
											<p class="text-[14px] text-right">
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
											<p class="text-[14px] text-right">
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
											<p class="text-[14px] text-right">
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
	</div>
</template>
