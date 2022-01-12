<template>
  <div>
    <div class="row">
      <div class="col">
        <h4>Bias Discovery</h4>
        <div class="form-text">
          <p>Data about the discovery, e.g. how the bias was discovered, by whom and what motivated them to look for it, 
          could help in understanding more about the way in which bias is discovered and lead to improvements in detection, education etc.
          For example, it could inform on questions with regards to the roles that discover more or less bias, how they differ in discovering and reporting on it and what type bias they tend to discover. </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-form>
          <b-form-group
            label="What was the role of the person or team who discovered it? e.g. end user, developer, data scientist (optional)"
            label-for="whoDiscovered"
          >
             <b-form-select
              v-model="bias.whoDiscovered"
              :options="whoDiscoveredOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group
          v-if="bias.whoDiscovered === 'Other'"
            label="Please provide detail"
            label-for="whoDiscoveredDetail"
          >
            <b-form-input v-model="bias.whoDiscoveredDetail"></b-form-input>
          </b-form-group>

          <b-form-group
            label="How was it discovered? Describe the circumstances and the process"
            label-for="howDiscovered"
          >
            <b-form-textarea
              id="howDiscovered"
              v-model="bias.howDiscovered"
              rows="3"
              max-rows="6"
              description=""
            ></b-form-textarea>
          </b-form-group>
        </b-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="mt-4">Validating and Quantifying</h4>
        <div class="form-text">
          <p>We want to know What methodologied, tools, metrics etc were used to detect and/or quantify the bias. Any information you can share about the process is helpful.
          <br>
          If you are up to it, please indicate if you used one of the tools we list, and let us know if you've used a tool that is not on the list.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
       <b-form>
          <b-form-group
            label="What tools were used in detecting and/or quantifying the bias?"
            label-for="tools"
          >
          <multiselect 
            v-model="bias.tools" 
            :options="toolsOptions" 
            :multiple="true" 
            :close-on-select="false" 
            :clear-on-select="false" 
            :preserve-search="true" 
            placeholder="Start typing to search for an item" 
            label="name" 
            track-by="name" 
            :preselect-first="false"
            :hideSelected="true"
           >
          <template slot="option" slot-scope="props">
              <div class="option__desc">
                <span class="option__title">{{ props.option.name }}</span>
                <span class="option__small">{{ props.option.desc }} <b-link v-if="props.option.link && props.option.link.length" :href="props.option.link" target="_blank">Learn more</b-link></span>
              </div>
            </template>
          </multiselect> 
          </b-form-group>
         <b-form-group
            label="If you used a tool that is not on the list, please enter its name, url and any other relevant information"
            label-for="otherTool"
          >
            <b-form-input v-model="bias.otherTool"></b-form-input>
          </b-form-group>

          <b-form-group
            label="What process, methodologies, mathematical or statistical tecniques were used to detect or evaluate the bias?"
            label-for="methodologies"
          >
            <b-form-textarea
              id="methodologies"
              v-model="bias.methodologies"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
           <b-form-group
            label="We'd also like to know your asessment of the methods and tools, how well did they work?"
            label-for="methodologies"
          >
            <b-form-textarea
              id="methodologiesAsessment"
              v-model="bias.methodologiesAsessment"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="mt-4">Labels/Protected Attributes</h4>
        
      </div>
    </div>
    
    <div class="row">
      <div class="col">
        <b-form>
            <b-form-group
            label="List all descrete (non intersectional) groups were negatively affected (you will be able to add intersectionality further down)"
            label-for="affectedGroups"
          >
            </b-form-group>
          <b-form-group
            label="Type (e.g. Sex, Age)"
            label-for="newGroupType"
          >
             <b-form-input v-model="newGroupType"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Details (e.g. > Female, Under 20 years old)"
            label-for="newGroupDetail"
          >
            <b-form-input v-model="newGroupDetail"></b-form-input>
          </b-form-group>

          <b-form-group
          >
            <b-button @click.prevent="addGroup" variant="primary">Add</b-button>
          </b-form-group>
        </b-form>
      </div>
    </div>



    <div class="row">
      <div class="col">
        <b-form>
           <b-form-group
          >
          
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Attributes and value details of affected groups (Attribute:Details)</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(group, index) of bias.affectedGroups"
                :key="index"
                v-bind:id="group + '-' + index">
              <td class="align-middle"> {{group.type}}:  {{group.detail}}</td>
              <td align="right"><b-button @click.prevent="removeGroup(index)" variant="link"><i class="bi bi-x-circle fs-5" ></i></b-button></td>
            </tr>
          </tbody>
        </table>
           </b-form-group>
          
        </b-form>
         </div>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="mt-4">Intersectionality</h4>
        <div class="form-text">
          <p>
          intersectionality refers to an overlap in the groups you lisetd above, for example when an indvidual who belongs to both Sex:female group and also to Income:low is discirimated against in the system compared to individuals who are not in this specific group combination.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
      <b-form>
          <b-form-group
          label="Add intersectionality (which combinations of groups were affected)"
          label-for="intersects"
        >
        <multiselect 
                v-model="newIntersectGroups" 
                :options="intersectsOptions" 
                :multiple="true" 
                :close-on-select="false" 
                :clear-on-select="false" 
                :preserve-search="true" 
                placeholder="Start typing to search for an item" 
                :preselect-first="false"
              >
              </multiselect> 
          </b-form-group>
          <div class="row">
          <div class="col">
              <b-form-group
          label="How was this combination of groups affected?"
          label-for="newIntersectDetail"
        >
          <b-form-textarea
            id="newIntersectDetail"
            v-model="newIntersectDetail"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
              </b-form-group>
          </div>
        </div>
          <div class="row">
          <div class="col">
            <b-form-group>
            <b-button @click.prevent="addIntersect" variant="primary">Add</b-button>
            </b-form-group>
          </div>
        </div>
        
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Intersections</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(intersect, index) of bias.intersects"
                      :key="index"
                      v-bind:id="index">
            <td>{{intersect.groups.join(' | ')}}
              <div class="detail">
                {{intersect.detail}}
              </div>
            </td>
            <td align="right">
              <b-button @click.prevent="removeIntersect(index)" variant="link"><i class="bi bi-x-circle fs-5" ></i></b-button>
              </td>
          </tr>
        </tbody>
      </table>

      </b-form>
  
    </div>
    </div>
  
  </div>
</template>

<script>
import multiSelect from './multiSelect.vue';
export default {
  components: { multiSelect },
  name: "biasTab",
  props: {
    bias: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      newGroupType: '',
      newGroupDetail: '',
      newIntersectGroups: [],
      newIntersectDetail: '',
      toolsOptions: [
        {
          name: "Manual review",
          link: "",
          desc: "Human inspection"
        },
        {
          name: "AI Fairness 360",
          link: "https://aif360.mybluemix.net/",
          desc:"An extensible open source toolkit can help you examine, report, and mitigate discrimination and bias in machine learning models throughout the AI application lifecycle"
        },
        {
          name: "FairLens",
          link: "https://www.synthesized.io/fairlens",
          desc:"An open-source Python library"
        },
        {
          name: "FairVis",
          link: "https://fredhohman.com/papers/fairvis",
          desc:"Visual Analytics for Discovering Intersectional Bias in Machine Learning"
        }
      ],
      groupTypeOptions: [
          'Sex',
          'Race',
          'Ethnicity',
          'Age',
          'Social Status',
          'Income',
          'Residence Location'
      ],
      whoDiscoveredOptions: [
        'Developers',
        'Data Scientists',
        'Data providers',
        'End Users',
        'Reviewers',
        'System designers',
        'Other'
      ],
    };
  },
   computed: {
    intersectsOptions () {
      if(this.bias.affectedGroups){
         return this.bias.affectedGroups.map(function(val){
            return val.type + ': ' + val.detail;
        }) 
      }else{
        return []
      }
    }
  },
  methods: {
    addGroup() {
      this.bias.affectedGroups.push({
        type: this.newGroupType,
        detail: this.newGroupDetail
      });
      this.newGroupType = ''
      this.newGroupDetail = ''
    },
    removeGroup(i){
      this.bias.affectedGroups.splice(i) 
      // @todo Remove from this.bias.intersects where this group is involved  
    },
    addIntersect(){
      this.bias.intersects.push({
        groups: this.newIntersectGroups,
        detail: this.newIntersectDetail
      });
      this.newIntersectGroups = []
      this.newIntersectDetail = ''
    },
    removeIntersect(i){
      this.bias.intersects.splice(i)    
    },
  }
};
// @todo add autocomplete on new group Type field
</script>

<style lang="scss" scoped >
.option__small{
  display: block;
  font-size:12px;
}
.detail{
  font-style: italic;
  font-size: 14px;
}
</style>