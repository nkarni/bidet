<template>
  <div>
    <h3>The Dataset</h3>
    <div class="row">
      <div class="col-3">
        <p>
          Having access to the dataset would be very beneficial for future
          analysis of the bias. If you can - please provide the dataset (upload
          it or provide a publicly available url). If you cannot provide it for
          proprietary or privacy reasons we'd still appreciate any information
          you can provide about it.
        </p>
        <p>
          If you do provide the dataset, please make sure the data is anonymised
          or de-identified (see
          <a
            href="https://duckduckgo.com/?q=anonymisation+tools"
            target="_blank"
            >anonymization tools</a
          >.
        </p>
      </div>
      <div class="col">
        <b-form>
          <b-form-group
            label="How was the dataset sourced?"
            label-for="sourceType"
          >
            <b-form-select
              v-model="bias.sourceType"
              :options="sourceTypeOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group
            v-if="bias.sourceType !== 'Publicly available'"
            label="Please provide details (who owns it etc.)"
            label-for="sourceTypeDetails"
          >
            <b-form-textarea
              id="sourceTypeDetails"
              v-model="bias.sourceTypeDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            label="Can you provide the dataset?"
            label-for="canSupplyDataset"
          >
            <toggle
              :value="bias.canSupplyDataset"
              @toggled="(value) => (bias.canSupplyDataset = value)"
            ></toggle>
          </b-form-group>
          <div v-if="bias.canSupplyDataset">
            <b-form-group label="Upload the dataset" label-for="datasetFile">
              <b-form-file
                id="datasetFile"
                v-model="bias.datasetFile"
                :state="Boolean(bias.datasetFile)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-form-group>
            <b-form-group
              label="OR, provide URL access to it"
              label-for="datasetUrl"
            >
              <b-form-input v-model="bias.datasetUrl"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Can this dataset be shared with other users of this system?"
              label-for="canShareDataset"
            >
              <toggle
                :value="bias.canShareDataset"
                @toggled="(value) => (bias.canShareDataset = value)"
              ></toggle>
            </b-form-group>
          </div>
          <div v-else>
            <b-form-group
              label="Please describe the dataset (optional)"
              label-for="sourceTypeDetails"
            >
              <b-form-textarea
                id="sourceTypeDetails"
                v-model="bias.sourceTypeDetails"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datasetTab",
  props: {
    // bias: {
    //   type: Object, 
    //   default: () => ({})
    // },
  },
  data () {
            return {
                bias: {
                    sourceType: 'Commerically (bought it)',
                    sourceTypeDetails: '',
                    canSupplyDataset: true,
                    datasetFile: null,
                    datasetUrl: '',
                    canShareDataset: true
                },
                sourceTypeOptions: ['Publicly available','Commerically (bought it)','Owned by my company','Owned by my academic institution']
            }
        },
	
  // methods: {
  //   async updated() {
  //     this.$emit("updated", this.bias);
  //   },
  // },
};
</script>

<style lang="scss" scoped >
</style>