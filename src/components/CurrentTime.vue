<script setup lang="ts">
	const startingData = '2022-07-21';
	const startingTime = '10:00';
	const endingData = '2022-07-29';
	const endingTime = '12:30';
</script>

<template>
	<div class="p-4 m-4 w-[360px] bg-white rounded-md shadow-md">
		<!-- Current Time -->
		<h2 class="uppercase text-[18px] font-semibold">Joriy Vaqt</h2>
		<!-- Date Object here -->
		<div>
			<div class="flex flex-col py-3">
				<label class="text-gray-35 text-sm pb-1" for="subjectTitle"
					>Boshlash vaqti
				</label>
				<div>
					<input
						v-model="startingData"
						type="date"
						name="time"
						class="border-gray-45 rounded mr-2"
					/>

					<input
						v-model="startingTime"
						type="time"
						name="title"
						id="title"
						class="border-gray-45 rounded"
					/>
				</div>
			</div>
			<div class="flex flex-col py-2">
				<label class="text-gray-35 text-sm pb-1" for="subjectTitle"
					>Tugash vaqti
				</label>
				<div>
					<input
						v-model="endingData"
						type="date"
						name="time"
						class="border-gray-45 rounded mr-2"
					/>

					<input
						v-model="endingTime"
						type="time"
						name="title"
						id="title"
						class="border-gray-45 rounded"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
