<template>
  <div class="container p-5">
    <div class="row">
      <div class="col">
        <h3 class="mb-3">
          <span>Bias Detection Events</span
          ><span style="float: right; font-size: 14px"
            ><NuxtLink to="list" class="nav-link pr-0"
              >Back to dashboard</NuxtLink
            ></span
          >
        </h3>
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
              <b-button-group class="d-grid gap-2 d-md-block">
                <b-button @click="tabIndex--">Previous</b-button>
                &nbsp;
                <b-button @click="tabIndex++">Next</b-button>
              </b-button-group>
            </div>
          </b-tab>
          <b-tab title="The Report">
            <report-tab :bias="bias"></report-tab>
            <div class="text-center">
              <b-button-group class="d-grid gap-2 d-md-block">
                <b-button @click="tabIndex--">Previous</b-button>
                &nbsp;
                <b-button @click="tabIndex++">Next</b-button>
              </b-button-group>
            </div>
          </b-tab>
          <b-tab title="Review">
            <review-tab :bias="bias"></review-tab>
            <div class="text-center">
              <b-button-group class="d-grid gap-2 d-md-block">
                <b-button @click="tabIndex--">Previous</b-button>
              </b-button-group>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BiasTab from "~/components/biasTab.vue";
import DatasetTab from "~/components/datasetTab.vue";
import ReviewTab from "~/components/reviewTab.vue";
import toggle from "~/components/toggle.vue";
export default {
  components: { toggle, DatasetTab, BiasTab, ReviewTab },
  data() {
    return {
      bias: {
        sourceType: "Commerically (bought it)",
        sourceTypeDetails: "",
        canSupplyDataset: true,
        datasetFile: null,
        datasetUrl: "",
        canShareDataset: true,
        whoDiscovered: "",
        whoDiscoveredDetail: "",
        howDiscovered: "",
        methodologies: "",
        tools: [],
        otherTool: "",
        affectedGroups: [],
        intersects: [],
        allowPeerReview: true,
        moreInfo: "",
        status: "Pending Review",
        methodologiesAsessment: ""
      },
      tabIndex: 0,
      prePopBiases: [
        {
          sourceType: "Publicly available",
          sourceTypeDetails: "",
          canSupplyDataset: true,
          datasetFile: null,
          datasetUrl:
            "https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Original%29",
          canShareDataset: true,
          whoDiscovered: "Other",
          whoDiscoveredDetail: "The CEO's grandma",
          howDiscovered: "While walking the dog",
          methodologies: "This, that and the other",
          tools: [
            {
              name: "AI Fairness 360",
              link: "https://aif360.mybluemix.net/",
              desc: "An extensible open source toolkit can help you examine, report, and mitigate discrimination and bias in machine learning models throughout the AI application lifecycle",
            },
            {
              name: "FairLens",
              link: "https://www.synthesized.io/fairlens",
              desc: "An open-source Python library",
            },
          ],
          otherTool: "Another tool you don't know about",
          affectedGroups: [
            { type: "Sex", detail: "Females < 50" },
            { type: "Religion", detail: "Christians" },
            { type: "Household income", detail: "Under 50K p.a." },
          ],
          intersects: [
            {
              groups: ["Religion - Christians", "Sex - Females < 50"],
              detail: "Were less likely to get help",
            },
            {
              groups: [
                "Household income - Under 50K p.a.",
                "Sex - Females < 50",
              ],
            },
          ],
          allowPeerReview: true,
          moreInfo: "",
          status: "Pending",
          methodologiesAsessment: ""
        },
      ],
    };
  },
  mounted: function () {
    this.onMounted();
  },
  methods: {
    onMounted: function () {
      if (this.$route.query.id) {
        this.bias = this.prePopBiases[this.$route.query.id];
      }
    },
  },
};
</script>

<style>
</style>