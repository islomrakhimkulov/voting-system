<script setup lang="ts">
	const notSubject = true;
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
							class="p-4 w-full placeholder:uppercase placeholder:text-gray-90 outline-none rounded border-gray-90"
							type="text"
							placeholder="Yig'ilishni nomini kiriting namuna uchun: XIX syezd "
						/>
					</div>
					<p class="text-accent-300 text-[16px] font-semibold">
						Tarkibi
					</p>
					<!--           
                     --------   guide   --------
                     if subject not found, put not found svg icon,
                     else VotingSubjectsAccordion
                 -->
					<div
						class="flex items-center justify-center py-10"
						v-if="notSubject"
					>
						<img
							src="@/assets/not-add.png"
							alt=""
							class="pointer-events-none"
						/>
					</div>
					<div v-else>
						<VotingSubjectsAccordion />
					</div>
					<!-- Voting Subjects Accordion -->

					<!-- Add Subject Button -->
					<div>
						<AppButton
							class="py-4 w-full uppercase"
							color="accent"
							size="large"
							>Mavzu qo'shish</AppButton
						>
					</div>
					<AppModal class="mt-3" />
				</div>
				<div class="w-[20%] ml-5">
					<div class="mt-[150px]">
						<div class="flex justify-start items-center ml-4">
							<AppButton color="accent">Saqlash</AppButton>
						</div>
						<CurrentTime />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
