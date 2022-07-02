<script setup lang="ts">
	const notSubject = true;
</script>

<template>
	<div class="relative">
		<AppNavbar />
		<div class="container mx-auto py-4">
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
				<p class="text-accent-300 text-[16px] font-semibold">Tarkibi</p>
				<!--           
                     --------   guide   --------
                     if subject not found, put not found svg icon,
                     else VotingSubjectsAccordion
                 -->
				<div
					class="flex items-center justify-center py-10"
					v-if="notSubject"
				>
					<img src="@/assets/not-add.png" alt="" />
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
			</div>
		</div>
	</div>
</template>

<style scoped></style>
