<script steup lang="ts"></script>

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
						class="border-gray-45 rounded mr-2"
						type="date"
						name="time"
					/>

					<input
						class="border-gray-45 rounded"
						type="time"
						name="title"
						id="title"
					/>
				</div>
			</div>
			<div class="flex flex-col py-2">
				<label class="text-gray-35 text-sm pb-1" for="subjectTitle"
					>Tugash vaqti
				</label>
				<div>
					<input
						class="border-gray-45 rounded mr-2"
						type="date"
						name="time"
					/>

					<input
						class="border-gray-45 rounded"
						type="time"
						name="title"
						id="title"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
