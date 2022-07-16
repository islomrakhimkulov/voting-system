<script setup lang="ts">
	const openModal = ref(false);

	const myDate = new Date().toISOString().substr(0, 10);
	// var today = new Date().toLocaleTimeString().toString().padStart(2, '0');
</script>

<template>
	<div>
		<AppButton color="primary" @click="openModal = true"
			>Show Modal</AppButton
		>

		<Teleport to="body">
			<transition name="modal" v-if="openModal">
				<div class="modal">
					<div
						class="mx-auto mt-[150px] max-w-[1100px] bg-white shadow rounded-md"
					>
						<!-- add subhect  -->
						<div class="flex">
							<div class="w-1/2 border-r-[1px] border-gray-45">
								<div
									class="bg-gray-3000 py-5 px-7 rounded-t-md"
								>
									<!-- title -->
									<h2 class="text-[22px] font-semibold">
										Mavzu qo'shish
									</h2>

									<!-- form content -->
									<div class="py-2">
										<div class="flex flex-col py-2">
											<label
												class="text-gray-35 text-[16px] pb-1"
												for="title"
												>Mavzu
												<span class="text-danger-600"
													>*</span
												>
											</label>
											<input
												class="rounded text-[16px] border-gray-45"
												type="text"
												placeholder="Text"
												name="title"
												id="title"
											/>
										</div>
										<div class="flex flex-col py-2">
											<label
												class="text-gray-35 text-[16px] pb-1"
												for="subjectContent"
												>Matn
												<span class="text-danger-600"
													>*</span
												>
											</label>
											<textarea
												class="text-sm border-gray-45 resize-none rounded"
												name=""
												id="subjectContent"
												rows="6"
												placeholder="lorem10"
											></textarea>
										</div>
										<div class="flex flex-col py-2">
											<label
												class="text-gray-35 text-[16px] pb-1"
												for="subjectTitle"
												>Vaqt
												<span class="text-danger-600"
													>*</span
												>
											</label>
											<div>
												<input
													class="border-gray-45 rounded"
													type="time"
													placeholder="Daqiqa"
													name="time"
												/>
												:
												<input
													v-model="myDate"
													class="border-gray-45 rounded"
													type="date"
													placeholder="Soniya"
													name="title"
													id="title"
												/>
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

							<!-- before see -->
							<div class="w-1/2">
								<div class="px-7 py-5">
									<!-- title -->
									<h2 class="text-[22px] pb-2 font-semibold">
										Oldindan ko'rish
										<AppButton
											color="danger"
											@click="openModal = false"
											>Close</AppButton
										>
									</h2>

									<!-- subject title  -->
									<div
										class="text-gray-5 pb-2 font-semibold uppercase"
									>
										ABOUT NEW INDUSTRY OF ALL REGIONS AND
										THEIR LIVES, WHAT DO THOSE WHO ARE POOR
										NEED AND GOVERNMENT SHOULD PROVIDE WORK
										SPACE TO HELP OUT
									</div>

									<!-- subject description -->
									<p class="text-gray-25 pb-2">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to make a type specimen
										book. It has survived not only five
									</p>

									<!-- time -->
									<div class="pb-2">
										<h2
											class="pb-3 text-gray-900 uppercase text-[16px]"
										>
											Ajratilgan vaqt
										</h2>
										<!-- time component -->
										<div>
											<AppTimer />
										</div>
									</div>

									<!-- voting buttons group -->

									<div>
										<h2
											class="pb-3 text-gray-900 uppercase text-[16px]"
										>
											Ovoz berish
										</h2>
										<!-- buttons -->
										<div class="flex gap-5">
											<AppButton
												color="success"
												class="w-full"
												>Qo'shilaman</AppButton
											>
											<AppButton
												color="danger"
												class="w-full"
												>Qarshiman</AppButton
											>
											<AppButton
												color="warning"
												class="w-full"
												>Be'tarafman</AppButton
											>
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
