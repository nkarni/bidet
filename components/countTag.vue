<template>
	<span class="countTag">
		{{value}}
	</span>
	
</template>

<script>
	export default {
		name: 'countTag',
		props: {
			value: {
				type: String,
				default: ''
			},
		},
	}
</script>

<style lang="scss" scoped >
	.countTag{
		background-color: #3f6ca0;
		border-radius: 50%;
		color: white;
		margin: 10px;
		padding: 10px;
	}
</style>