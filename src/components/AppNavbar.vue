<script setup lang="ts"></script>
<template>
	<div class="bg-accent-60 py-3">
		<div class="flex mx-auto container gap-4">
			<!-- Logo -->
			<div class="mr-10">
				<img class="h-[4.375rem]" src="@/assets/logo.svg" alt="" />
			</div>
			<!-- router links  -->
			<div class="flex items-center gap-4">
				<router-link
					:to="{ name: 'control-voting-list' }"
					class="text-sm font-normal uppercase rounded"
				>
					Yig'ilishlar
				</router-link>
				<router-link
					:to="{ name: 'control-voting-device-list' }"
					class="text-sm font-normal uppercase rounded"
				>
					Qurilmalar
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	a.router-link-active {
		@apply px-6 py-3 bg-accent-300 text-white rounded;
	}
</style>
