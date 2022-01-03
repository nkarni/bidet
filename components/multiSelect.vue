<template>
	<div class="ms-container">
		<b-button variant="outline-dark">Item1  x</b-button>
		<b-button variant="outline-dark">Item2  x</b-button>
	</div>
	
</template>

<script>
	export default {
		name: 'multiSelect',
		props: {
			items: {
				type: Array,
				default: () => ([]),
    },
		},
		methods: {
			// async toggleValue() {
			// 	this.$emit('toggled', !this.value);
			// }
		}
	}
</script>

<style lang="scss" scoped >
.ms-container{
	width: 100%;
	border: gray 1px solid;
}
	
</style>