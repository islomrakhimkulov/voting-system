<script setup lang="ts">
	import TickIcon from '@/assets/icons/check.svg?raw';
	import CrossIcon from '@/assets/icons/xmark.svg?raw';
	import CircleIcon from '@/assets/icons/circle.svg?raw';
	defineProps({
		isOpenModal: {
			type: Boolean,
			default: false,
		},
	});

	const emits = defineEmits(['closeSubjectModal']);

	const closeSubjectModal = () => {
		emits('closeSubjectModal');
	};

	// const myDate = new Date().toISOString().substr(0, 10);
	const showData = '2022-07-21';
	const showTime = '13:12';
	// var today = new Date().toLocaleTimeString().toString().padStart(2, '0');

	const subjectText = ref('');
	const subjectDescription = ref('');

	const saveSubjectData = () => {
		console.log(subjectText.value + ' ' + subjectDescription.value);

		// push and clear input
		subjectText.value = '';
		subjectDescription.value = '';
	};
</script>

<template>
	<div>
		<Teleport to="body">
			<Transition name="fade">
				<div class="modal" v-if="isOpenModal">
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
												v-model="subjectText"
												type="text"
												placeholder="Text"
												name="title"
												id="title"
												class="rounded text-[16px] border-gray-45"
											/>
										</div>
										<div class="flex flex-col py-2">
											<label
												class="text-gray-35 text-[16px] pb-1"
												for="subjectDescription"
												>Matn
												<span class="text-danger-600"
													>*</span
												>
											</label>
											<textarea
												v-model="subjectDescription"
												name=""
												id="subjectDescription"
												rows="6"
												placeholder="Tavsif"
												class="text-sm border-gray-45 resize-none rounded"
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
													v-model="showTime"
													type="time"
													placeholder="Daqiqa"
													name="time"
													class="border-gray-45 rounded"
												/>
												:
												<input
													v-model="showData"
													type="date"
													placeholder="Soniya"
													name="title"
													id="title"
													class="border-gray-45 rounded"
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
											@click="closeSubjectModal"
											class="w-1/4"
											size="small"
											color="simple"
											>Bekor qilish</AppButton
										>
										<AppButton
											@click="saveSubjectData"
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
									</h2>

									<!-- subject title  -->
									<div
										class="text-gray-5 pb-2 min-h-[100px] font-semibold uppercase"
									>
										{{ subjectText }}
									</div>

									<!-- subject description -->
									<p class="text-gray-25 pb-2 min-h-[100px]">
										{{ subjectDescription }}
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
											>
												Qo'shilaman</AppButton
											>
											<AppButton
												color="danger"
												class="w-full"
											>
												Qarshiman</AppButton
											>
											<AppButton
												color="warning"
												class="w-full"
											>
												Be'tarafman</AppButton
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>
	</div>
</template>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease-in;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
