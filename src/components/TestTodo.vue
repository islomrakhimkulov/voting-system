<script setup lang="ts">
	import DeleteIcon from '@/assets/icons/delete-white.svg?raw';
	import EditIcon from '@/assets/icons/edit-white.svg?raw';
	import PlusIcon from '@/assets/icons/bi_plus-circle.svg?raw';

	const todoList = ref([
		{ id: 0, title: 'Javascript' },
		{ id: 1, title: 'Vue Js' },
		{ id: 2, title: 'Node JS' },
	]);
	const newTodo = ref('');
	const taskEdit = ref([{ id: 0, title: '' }]);
	// delete
	const deleteTodo = (id: number) => {
		todoList.value.splice(id, 1);
	};
	// add todo
	const addTodo = () => {
		if (newTodo.value) {
			todoList.value.push({
				id: todoList.value.length,
				title: newTodo.value,
			});
		}
		newTodo.value = '';
	};

	const editTodo = (index: number) => {
		let newTask = todoList.value.find(task => task.id == index);

		taskEdit.value.map(item => {
			item.title = newTask?.title;
		});

		newTodo.value = '';
		console.log(index + ' ' + newTodo.value);
	};
</script>
<template>
	<div class="shadow my-4 w-[600px] mx-auto">
		<div class="p-5">
			<h2 class="py-1 text-xl font-bold text-center uppercase">
				Todo List
			</h2>
			<div class="flex py-2 gap-2">
				<input
					class="rounded w-[85%]"
					type="text"
					placeholder="Add Language"
					v-model="newTodo"
				/>
				<app-button
					@click="addTodo"
					size="medium"
					color="accent"
					class="w-[15%]"
				>
					Add
					<!-- <app-icon size="small" v-html="PlusIcon"></app-icon> -->
				</app-button>
			</div>
			<ul class="pt-2">
				<li v-for="(todo, idx) in todoList" :key="idx">
					<div class="flex items-center">
						<p class="px-1">{{ todo.id }}.</p>
						<div class="w-full uppercase">
							{{ todo.title }}
						</div>
						<div class="flex gap-2 py-1">
							<app-button
								@click="editTodo(idx)"
								size="small"
								color="success"
							>
								<app-icon
									size="medium"
									v-html="EditIcon"
								></app-icon>
							</app-button>
							<app-button
								@click="deleteTodo(idx)"
								size="small"
								color="danger"
							>
								<app-icon
									size="medium"
									v-html="DeleteIcon"
								></app-icon>
							</app-button>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
