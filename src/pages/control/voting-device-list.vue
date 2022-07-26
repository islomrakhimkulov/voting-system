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

	// named group list
	const namedGroupList = ref([
		{ id: 0, name: 'Quyi Palata', memberCount: 5 },
		{ id: 1, name: "O'rta Palata", memberCount: 10 },
		{ id: 2, name: 'Yuqori palata', memberCount: 15 },
	]);

	// unnamed group list
	const unNamedGroupList = ref([
		{ id: 0, name: "Joh's tablet", status: 'Guruhlanmagan' },
		{ id: 1, name: "Usmon's tablet", status: 'Guruhlanmagan' },
		{ id: 2, name: "Kamol's tablet", status: 'Guruhlanmagan' },
	]);
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
									@click="showTokenCodeModal"
								>
									<AppIcon v-html="PlusIcon" position="left">
									</AppIcon
									>Qo'shish
								</AppButton>
							</div>
						</div>

						<!-- devices card group -->

						<div class="flex flex-row flex-wrap gap-5 py-3">
							<!-- unnnamed cards group components -->
							<template
								v-for="unNamedCard in unNamedGroupList"
								:key="unNamedCard.id"
							>
								<VotingUnnamedGroup
									:unNamedCard="unNamedCard"
								/>
							</template>
						</div>
					</div>
					<!-- groups name -->
					<div>
						<div class="flex justify-between items-center">
							<h2
								class="text-[18px] text-gray-900 font-semibold uppercase"
							>
								Guruhlar nomi
							</h2>
							<div>
								<AppButton
									color="accent"
									@click="showDevicesModal"
								>
									<AppIcon v-html="PlusIcon" position="left">
									</AppIcon>
									Qo'shish
								</AppButton>
							</div>
						</div>
						<!-- devices named card group  -->
						<div class="flex flex-row flex-wrap gap-5 py-3">
							<!-- named cards group cards -->
							<template
								v-for="namedCard in namedGroupList"
								:key="namedCard.id"
							>
								<VotingNamedGroup :namedCard="namedCard" />
							</template>
						</div>
					</div>
				</div>
			</div>

			<!-- token code modal -->
			<VotingTokenCode
				:isOpen="isOpenToken"
				@close="hideTokenCodeModal"
			/>

			<!-- devices control modal -->
			<VotingDevicesModal
				:isOpen="isOpenDevice"
				@close="hideDevicesModal"
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
