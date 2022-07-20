<script setup lang="ts">
	import deleteIcon from '@/assets/icons/delete.svg?raw';
	const props = defineProps({
		isOpen: {
			type: Boolean,
			default: false,
		},
	});

	const emits = defineEmits(['close']);

	const closeTokenCodeModal = () => {
		emits('close');
	};

	// get this code from backend
	const keyCode: number = 523109;

	// outputing number
	const tokenCode = Array.from(String(keyCode));
</script>

<template>
	<div>
		<!-- open registration modal -->
		<Teleport to="body">
			<transition name="modal" v-if="isOpen">
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
							<ul
								class="pb-4 flex items-center justify-center gap-2"
							>
								<li
									v-for="code in tokenCode"
									:key="code"
									class="px-4 py-2 inline-flex gap-4 bg-success-50 text-success-300 text-[24px] rounded border-2 border-success-300"
								>
									{{ code }}
								</li>
							</ul>
						</div>
						<div
							class="border-t border-t-[#D9D9D9]-100 bg-white rounded-b-md py-5 flex justify-end pr-4"
						>
							<AppButton
								class="w-1/3"
								@click="closeTokenCodeModal"
								color="simple"
								size="small"
								>Chiqish
							</AppButton>
						</div>
					</div>
				</div>
			</transition>
		</Teleport>
	</div>
</template>
