<template>
	<div class="container">
		<div class="row">
            <div class="col">
                <b-tabs v-model="tabIndex" small card>
                    <b-tab title="The Dataset">
                        <dataset-tab :bias="bias"></dataset-tab>
                        <div class="text-center">
                            <b-button-group class="mt-2">
                                <b-button @click="tabIndex++">Next</b-button>
                            </b-button-group>
                        </div>
                    </b-tab>
                    <b-tab title="The Bias">
                    <bias-tab :bias="bias"></bias-tab>
                     <div class="text-center">
                            <b-button-group class="mt-2">
                                <b-button @click="tabIndex--">Previous</b-button>
                                <b-button @click="tabIndex++">Next</b-button>
                            </b-button-group>
                        </div>
                    </b-tab>
                    <b-tab title="The Report" >Coming soon</b-tab>
                    <b-tab title="Review">Coming soon</b-tab>
                </b-tabs>

               
                {{this.bias}}
                {{ this.$route.query.report}}
            </div>
        </div>
	</div>
</template>

<script>
import BiasTab from '~/components/biasTab.vue'
import DatasetTab from '~/components/datasetTab.vue'
import toggle from '~/components/toggle.vue'
	export default {
  components: { toggle, DatasetTab, BiasTab },
        data () {
            return {
                bias: {
                    sourceType: 'Commerically (bought it)',
                    sourceTypeDetails: '',
                    canSupplyDataset: true,
                    datasetFile: null,
                    datasetUrl: '',
                    canShareDataset: true,
                    whoDiscovered: '',
                    whoDiscoveredDetail: '',
                    howDiscovered: '',
                    methodologies: '',
                    tools: [],
                    otherTool: '',
                    affectedGroups: [],
                    intersects: [],
                    allowPeerReview: true,
                    moreInfo: '',
                    status: 'Pending'

                },
                tabIndex: 0
            }
        }
	}
</script>

<style>

</style>