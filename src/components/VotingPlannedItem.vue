<script setup lang="ts">
	import { Subject } from '@/types/SubjectType';

	const { subject } = defineProps<{ subject: Subject | undefined }>();

	const actionButtonColor = computed(() => {
		if (subject?.status === 'Open Vote') {
			return 'accent';
		}

		if (subject?.status === 'End Vote') {
			return 'danger';
		}

		return 'default';
	});
</script>

<template>
	<tr class="border-b border-b-gray-40">
		<td class="px-3 py-3 w-[400px]">
			<p>
				{{ subject.title }}
			</p>
		</td>
		<td>
			<!-- left  time -->
			<p>Open | {{ subject.time }} left</p>
			<!-- total vote count -->
			<p>Total vote: {{ subject.count }}</p>
		</td>
		<td class="px-3 py-3">
			<AppButton class="w-full" size="small" :color="actionButtonColor">
				{{ subject.status }}
			</AppButton>
		</td>
	</tr>
</template>

<style scoped></style>
