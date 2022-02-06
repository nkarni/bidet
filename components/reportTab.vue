<template>
  <div>
    <div class="row">
      <div class="col">
        <b-form>
          <b-form-group
            label="Do you give permission for peer review?"
            label-for="reviewAllowed"
          >
            <toggle
              :value="bias.allowPeerReview"
              @toggled="(value) => (bias.allowPeerReview = value)"
            ></toggle>
          </b-form-group>

          <b-form-group
            label="Any further information that might be useful?"
            label-for="moreInfo"
          >
            <b-form-textarea
              id="moreInfo"
              v-model="bias.moreInfo"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group label="Status" label-for="status">
            <b-form-select
              v-model="bias.status"
              :options="statusOptions"
            ></b-form-select>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datasetTab",
  props: {
    bias: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      statusOptions: ["Pending Review", "Submitted", "Confirmed", "Rejected"],
    };
  },
};
</script>

<style lang="scss" scoped >
</style>