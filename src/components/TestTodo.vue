<script setup lang="ts">
	const todoLsit = ref([
		{ id: 0, title: 'javascript' },
		{ id: 1, title: 'vue' },
		{ id: 2, title: 'node' },
	]);

	const getItem = ref('');

	// delete
	const deleteTodo = () => {
		todoLsit.value.splice(0, 1);
	};
	// add todo
</script>
<template>
	<div class="container mx-auto">
		<h2>Todo List</h2>
		<div class="flex">
			<input
				class="rounded"
				type="text"
				placeholder="text"
				v-model="getItem"
			/>
			<app-button size="medium" color="accent">add</app-button>
		</div>
		<ul>
			<li v-for="todo in todoLsit" :key="todo.id">
				<div class="flex items-center flex-row">
					<p>{{ todo.id }}</p>
					<div class="px-5">{{ todo.title }}</div>
					<app-button @click="deleteTodo" size="small" color="danger"
						>delete</app-button
					>
				</div>
			</li>
		</ul>
	</div>
</template>
