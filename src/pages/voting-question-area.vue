<script setup lang="ts"></script>

<template>
	<div class="relative">
		<div class="container mx-auto">
			<div class="flex">
				<div class="w-[35%] bg-primary-25">
					<div class="px-5 py-5">
						<!-- Subject title -->
						<h2
							class="pb-[40px] text-[22px] text-gray-900 uppercase font-semibold"
						>
							XIX Oliy Majlis Qonunchilik palatasining navbatdagi
							yalpi majlisi
						</h2>

						<!-- daily tasks title -->
						<h4 class="text-[18px] text-gray-900 uppercase">
							Kun tartibidagi mavzular
						</h4>

						<!-- tasks list -->
						<div class="pb-5">
							<VotingQuestionItem class="my-3" active />
							<VotingQuestionItem class="my-3" />
							<VotingQuestionItem class="my-3" />
							<VotingQuestionItem class="my-3" />
							<VotingQuestionItem class="my-3" />
							<VotingQuestionItem class="my-3" />
							<VotingQuestionItem class="my-3" />
						</div>
					</div>
				</div>
				<div class="w-[75%]">
					<div class="px-8">
						<!-- wave background svg icon -->
						<div
							class="fixed bottom-[-320px] right-[-120px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
						></div>
						<div
							class="fixed top-[-320px] left-[320px] -z-[999] bg-adminBg bg-cover w-[886.42px] h-[768.78px]"
						></div>

						<!-- subject content here -->
						<div>
							<div class="text-gray-900">
								<!-- about subject title -->
								<span class="text-sm uppercase">
									1- ovozga qo'yilgan mavzu
								</span>

								<!-- subject title content -->
								<h2 class="text-[20px] py-3 font-semibold">
									About new industry of all regions and their
									lives, what do those who are poor need and
									government should provide work space in
									order to help out
								</h2>

								<!-- subject content info -->
								<p class="text-[16px] pb-5">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book, Lorem Ipsum
									is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been
									the industry's standard dummy text ever
									since the 1500s
								</p>
							</div>
						</div>

						<!-- next prev buttons -->
						<div class="flex justify-between items-center">
							<AppButton>orqaga</AppButton>
							<AppButton color="accent">keyingi</AppButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
