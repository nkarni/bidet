<template>
	<div class="container">
		<div class="text-right">
			<b-link to="report">New</b-link>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Reported By</th>
					<th scope="col">My Role</th>
					<th scope="col">Status</th>
					<th scope="col">Peer Review Status + count</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td >12 March 2021</td>
					<td>Nitzan Karni (pre-populated sample 1)</td>
					<td>Reporter</td>
					<td><b-button>SUBMITTED</b-button></td>
					<td><b-button variant="outline-primary">Requested <count-tag value="2"></count-tag></b-button></td>
					<td><b-link to="report?id=0">VIEW</b-link></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {

		data () {
            return {
							fields: ['date', 'reported_by', 'my_role', 'status', 'peer'],
							items: [
								{ date: '12-02-2021', reported_by: 'John Smith', my_role: 'Reporter', status: 'Submitted', peer: 'requested 2' },
							]
						}
		}
		
	}
</script>

<style>

</style>