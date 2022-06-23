<script setup lang="ts">
	const props = defineProps({
		subjecstList: {
			type: Array,
			default: () => ({}),
		},
	});

	const filteredButton = computed(() => {
		subjecstList.value.map(item => {
			return item.status === 'Yakunlangan' ? 'default' : 'accent';
		});
	});
</script>

<template>
	<tr
		:v-for="subject in subjecstList"
		:key="subject.id"
		class="border-b-[1px] border-b-gray-80"
	>
		<td class="px-3 py-3">
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
		<td class="px-3 py-3">
			<p>{{ subject.time }}</p>
		</td>
		<td class="px-3 py-3">
			<AppButton class="p-2" size="small" :color="filteredButton">
				{{ subject.status }}
			</AppButton>
		</td>
	</tr>
</template>
