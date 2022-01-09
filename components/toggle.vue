<template>
	<div>
		<div v-if="value">
			<button type="button" class="btn btn-primary">Yes</button>
			<button type="button" class="btn btn-secondary" @click="toggleValue">No</button>
		</div>
		<div v-else>
			<button type="button" class="btn btn-secondary" @click="toggleValue">Yes</button>
			<button type="button" class="btn btn-primary">No</button>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'toggle',
		props: {
			value: {
				type: Boolean,
				default: true
			},
		},
		methods: {
			async toggleValue() {
				this.$emit('toggled', !this.value);
			}
		}
	}
</script>

<style lang="scss" scoped >
	.btn:focus {
		border: 0 !important;
		box-shadow: none !important;
	}

</style>