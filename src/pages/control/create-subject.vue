<script setup lang="ts">
	import PlusIcon from '@/assets/icons/bi_plus-circle.svg?raw';
	// import TickIcon from '@/assets/icons/check.svg?raw';
	const notSubject = false;
	const isOpenModal = ref(false);

	const showModal = () => {
		isOpenModal.value = true;
	};

	const closeSubjectModal = () => {
		isOpenModal.value = false;
	};

	const meetingName = ref('');

	const sendName = () => {
		console.log(meetingName.value);
		meetingName.value = '';
	};
</script>

<template>
	<div class="relative">
		<AppNavbar />
		<div class="container mx-auto py-4">
			<!-- wave background svg icon -->
			<div
				class="fixed bottom-[-320px] right-[-320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
			></div>

			<div class="flex">
				<div class="w-[75%]">
					<div class="flex text-[16px] text-gray-900 py-1">
						<img
							class="mr-1"
							src="@/assets/icons/chevron-left.svg"
							alt=""
						/>
						<h4 class="uppercase">Yig'ilishlar</h4>
					</div>
					<div class="py-3">
						<input
							@keyup.enter="sendName"
							v-model="meetingName"
							type="text"
							placeholder="Yig'ilishni nomini kiriting:"
							class="p-4 w-full placeholder:uppercase placeholder:text-gray-90 outline-none rounded border-gray-90"
						/>
					</div>
					<div class="flex items-center pb-3">
						<router-link
							:to="{ name: 'control-create-subject' }"
							class="mr-3 text-[15px] text-accent-300 font-semibold"
						>
							Tarkibi</router-link
						>
						<router-link
							:to="{ name: 'control-voting-full-result' }"
							class="text-gray-15 text-[15px] font-semibold"
							>Natija</router-link
						>
					</div>

					<!--           
                     --------   guide   --------
                     if subject not found, put not found svg icon,
                     else VotingSubjectsAccordion

                 -->

					<div v-if="!notSubject">
						<VotingSubjectsAccordion />
					</div>
					<div class="flex items-center justify-center py-10" v-else>
						<img
							src="@/assets/not-add.png"
							alt=""
							class="pointer-events-none"
						/>
					</div>
					<!-- Voting Subjects Accordion -->

					<!-- Add Subject Button -->
					<div>
						<AppButton
							@click="showModal"
							class="py-4 w-full uppercase"
							color="accent"
							size="large"
						>
							<AppIcon
								v-html="PlusIcon"
								position="left"
							></AppIcon>
							Mavzu qo'shish</AppButton
						>
					</div>
				</div>
				<div class="w-[20%] ml-5 mt-[130px]">
					<CurrentTime />
				</div>

				<!-- modal here -->

				<VotingCreateSubjectModal
					:is-open-modal="isOpenModal"
					@closeSubjectModal="closeSubjectModal"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
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
	/* a.router-link-active {
		@apply text-[15px] text-accent-300 font-semibold;
	} */
</style>
