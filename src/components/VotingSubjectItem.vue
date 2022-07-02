<script setup lang="ts">
	import { Subject } from '@/types/SubjectType';

	const { subject } = defineProps<{ subject: Subject | undefined }>();

	const actionButtonColor = computed(() => {
		if (subject?.status === 'Yakunlanganmagan') {
			return 'accent';
		}

		if (subject?.status === 'Rejalashtirilgan') {
			return 'accent';
		}

		return 'default';
	});
</script>

<template>
	<tr class="border-b border-b-gray-40">
		<td class="px-4 py-3">
			<input
				type="checkbox"
				class="rounded p-2 focus:ring-0 border border-gray-5"
				name=""
				id=""
			/>
		</td>
		<td class="px-3 py-3">
			<p>
				{{ subject.title }}
			</p>
		</td>
		<td>
			<p>{{ subject.time }}</p>
		</td>
		<td class="px-3 py-3">
			<AppButton
				class="p-1 w-full"
				size="small"
				:color="actionButtonColor"
			>
				{{ subject.status }}
			</AppButton>
		</td>
	</tr>
</template>

<style scoped></style>
