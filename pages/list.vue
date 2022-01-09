<template>
	<div class="container p-5">
		<div class="title-wrap">
			<h3>Reported Bias Detection Events</h3>
			<b-link class="btn btn-primary btn-sm" to="report">New</b-link>
		</div>
		
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Reported By</th>
					<th scope="col">My Role</th>
					<th scope="col" class="text-center">Status</th>
					<th scope="col" class="text-center">Peer Review Status + count</th>
					<th scope="col" class="text-center">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td >12 March 2021</td>
					<td>Nitzan Karni (pre-populated sample 1)</td>
					<td>Reporter</td>
					<td class="text-center"><b-button variant="success" size="sm">SUBMITTED</b-button></td>
					<td class="text-center"><b-button size="sm" variant="outline-primary">Requested <count-tag value="2"></count-tag></b-button></td>
					<td class="text-center"><b-button size="sm" variant="primary" to="report?id=0">View</b-button></td>
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