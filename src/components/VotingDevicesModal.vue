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

	const groupName = ref('');
	const unGroupedList = ref([
		{ id: 1, title: "Aziz's tablet", status: 'guruhlanmagan' },
		{ id: 2, title: "Islom's tablet", status: 'guruhlangan' },
		{ id: 3, title: "Javohir's tablet", status: 'guruhlanmagan' },
	]);

	const groupedList = ref([
		{ id: 1, title: "Joh's tablet", status: 'guruhlanmagan' },
	]);

	// const firstGroup = () => {
	// 	return unGroupedList.value.filter(
	// 		item => item.status === 'guruhlanmagan'
	// 	);
	// };
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
												@click.prevent="addName"
												v-model="groupName"
												type="text"
												placeholder="Guruh nomini kiriting"
												name="title"
												id="title"
												class="rounded text-[16px] border-gray-45"
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
												<!-- cards group -->
												<template
													v-for="unNamedGroupItem in groupedList"
													:key="unNamedGroupItem.id"
												>
													<VotingDevicesDec
														:unNamedGroupItem="
															unNamedGroupItem
														"
													/>
												</template>
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
										<!-- cards group -->
										<template
											v-for="unNamedGroupItem in groupedList"
											:key="unNamedGroupItem.id"
										>
											<VotingDevicesDec
												:unNamedGroupItem="
													unNamedGroupItem
												"
											/>
										</template>
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
