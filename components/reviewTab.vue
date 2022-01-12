<template>
  <div>
     <div class="row">
      <div class="col">
        <h4>Dr Jason James (jjames@gmail.com) - 10 Nov 2021</h4>
        <b-form-group
            label="Reviewer comments" 
          >
          <div class="form-text">
          <p>Data about the discovery, e.g. how the bias was discovered, by whom and what motivated them to look for it, 
          could help in understanding more about the way in which bias is discovered and lead to improvements in detection, education etc.
          For example, it could inform on questions with regards to the roles that discover more or less bias, how they differ in discovering and reporting on it and what type bias they tend to discover. </p>
        </div>
        </b-form-group>
      </div>
    </div>
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
  name: "reviewTab",
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