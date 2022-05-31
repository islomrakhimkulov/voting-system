<template>
	<button class="bg-primary-300 p-5" type="button">
		<slot name="first"></slot>
	</button>

	<button class="bg-warning-300" type="button">
		<slot name="second"></slot>
	</button>
</template>

<script>
	export default defineComponent({
		name: 'votingButton',
		setup() {},
	});
</script>
