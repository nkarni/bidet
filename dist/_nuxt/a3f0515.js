(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2,4,10,11,12,14],{301:function(e,t,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("86f8f60e",content,!0,{sourceMap:!1})},302:function(e,t,o){"use strict";o.r(t);var r=o(20),n=(o(47),{name:"toggle",props:{value:{type:Boolean,default:!0}},methods:{toggleValue:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("toggled",!e.value);case 1:case"end":return t.stop()}}),t)})))()}}}),l=(o(303),o(53)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.value?o("div",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v("Yes")]),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.toggleValue}},[e._v("No")])]):o("div",[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.toggleValue}},[e._v("Yes")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v("No")])])])}),[],!1,null,"106fcddc",null);t.default=component.exports},303:function(e,t,o){"use strict";o(301)},304:function(e,t,o){var r=o(59)(!1);r.push([e.i,".btn[data-v-106fcddc]:focus{border:0!important;box-shadow:none!important}",""]),e.exports=r},305:function(e,t,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("5e738dca",content,!0,{sourceMap:!1})},309:function(e,t,o){"use strict";o(305)},310:function(e,t,o){var r=o(59)(!1);r.push([e.i,".ms-container[data-v-661b150c]{width:100%;border:1px solid grey}",""]),e.exports=r},311:function(e,t,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("bca6369e",content,!0,{sourceMap:!1})},312:function(e,t,o){"use strict";o.r(t);var r={name:"multiSelect",props:{items:{type:Array,default:function(){return[]}}},methods:{}},n=(o(309),o(53)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ms-container"},[o("b-button",{attrs:{variant:"outline-dark"}},[e._v("Item1 x")]),o("b-button",{attrs:{variant:"outline-dark"}},[e._v("Item2 x")])],1)}),[],!1,null,"661b150c",null);t.default=component.exports},315:function(e,t,o){"use strict";o(311)},316:function(e,t,o){var r=o(59)(!1);r.push([e.i,".option__small[data-v-0514538a]{display:block;font-size:12px}.detail[data-v-0514538a]{font-style:italic;font-size:14px}",""]),e.exports=r},317:function(e,t,o){"use strict";o.r(t);o(12),o(155);var r={components:{multiSelect:o(312).default},name:"biasTab",props:{bias:{type:Object,default:function(){return{}}}},data:function(){return{newGroupType:"",newGroupDetail:"",newIntersectGroups:[],newIntersectDetail:"",toolsOptions:[{name:"Manual review",link:"",desc:"Human inspection"},{name:"Our own software",link:"",desc:"Proprietary software built by you for detecting Bias."},{name:"AI Fairness 360",link:"https://aif360.mybluemix.net/",desc:"An extensible open source toolkit can help you examine, report, and mitigate discrimination and bias in machine learning models throughout the AI application lifecycle"},{name:"FairLens",link:"https://www.synthesized.io/fairlens",desc:"An open-source Python library"},{name:"FairVis",link:"https://fredhohman.com/papers/fairvis",desc:"Visual Analytics for Discovering Intersectional Bias in Machine Learning"}],groupTypeOptions:["Sex","Race","Ethnicity","Age","Social Status","Income","Residence Location"],whoDiscoveredOptions:["Developer(s)","Data Scientist(s)","Data provider(s)","End User(s)","Reviewer(s)","System designer(s)","Other"]}},computed:{intersectsOptions:function(){return this.bias.affectedGroups?this.bias.affectedGroups.map((function(e){return e.type+": "+e.detail})):[]}},methods:{addGroup:function(){this.bias.affectedGroups.push({type:this.newGroupType,detail:this.newGroupDetail}),this.newGroupType="",this.newGroupDetail=""},removeGroup:function(i){this.bias.affectedGroups.splice(i)},addIntersect:function(){this.bias.intersects.push({groups:this.newIntersectGroups,detail:this.newIntersectDetail}),this.newIntersectGroups=[],this.newIntersectDetail=""},removeIntersect:function(i){this.bias.intersects.splice(i)}}},n=(o(315),o(53)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"What was the role of the person or team who discovered it? e.g. end user, developer, data scientist (optional)","label-for":"whoDiscovered"}},[o("b-form-select",{attrs:{options:e.whoDiscoveredOptions},model:{value:e.bias.whoDiscovered,callback:function(t){e.$set(e.bias,"whoDiscovered",t)},expression:"bias.whoDiscovered"}})],1),"Other"===e.bias.whoDiscovered?o("b-form-group",{attrs:{label:"Please provide detail","label-for":"whoDiscoveredDetail"}},[o("b-form-input",{model:{value:e.bias.whoDiscoveredDetail,callback:function(t){e.$set(e.bias,"whoDiscoveredDetail",t)},expression:"bias.whoDiscoveredDetail"}})],1):e._e(),o("b-form-group",{attrs:{label:"How was it discovered? Describe the circumstances and the process","label-for":"howDiscovered"}},[o("b-form-textarea",{attrs:{id:"howDiscovered",rows:"3","max-rows":"6",description:""},model:{value:e.bias.howDiscovered,callback:function(t){e.$set(e.bias,"howDiscovered",t)},expression:"bias.howDiscovered"}})],1)],1)],1)]),e._m(1),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"What tools were used in detecting and/or quantifying the bias?","label-for":"tools"}},[o("multiselect",{attrs:{options:e.toolsOptions,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Start typing to search for an item",label:"name","track-by":"name","preselect-first":!1,hideSelected:!0},scopedSlots:e._u([{key:"option",fn:function(t){return[o("div",{staticClass:"option__desc"},[o("span",{staticClass:"option__title"},[e._v(e._s(t.option.name))]),o("span",{staticClass:"option__small"},[e._v(e._s(t.option.desc)+" "),t.option.link&&t.option.link.length?o("b-link",{attrs:{href:t.option.link,target:"_blank"}},[e._v("Learn more")]):e._e()],1)])]}}]),model:{value:e.bias.tools,callback:function(t){e.$set(e.bias,"tools",t)},expression:"bias.tools"}})],1),o("b-form-group",{attrs:{label:"If you used a tool that is not on the list, please enter its name, url and any other relevant information","label-for":"otherTool"}},[o("b-form-input",{model:{value:e.bias.otherTool,callback:function(t){e.$set(e.bias,"otherTool",t)},expression:"bias.otherTool"}})],1),o("b-form-group",{attrs:{label:"What process, methodologies, mathematical or statistical tecniques were used to detect or evaluate the bias?","label-for":"methodologies"}},[o("b-form-textarea",{attrs:{id:"methodologies",rows:"3","max-rows":"6"},model:{value:e.bias.methodologies,callback:function(t){e.$set(e.bias,"methodologies",t)},expression:"bias.methodologies"}})],1),o("b-form-group",{attrs:{label:"We'd also like to know your asessment of the methods and tools, how well did they work?","label-for":"methodologies"}},[o("b-form-textarea",{attrs:{id:"methodologiesAsessment",rows:"3","max-rows":"6"},model:{value:e.bias.methodologiesAsessment,callback:function(t){e.$set(e.bias,"methodologiesAsessment",t)},expression:"bias.methodologiesAsessment"}})],1)],1)],1)]),e._m(2),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"List all descrete (non intersectional) groups were negatively affected (you will be able to add intersectionality further down)","label-for":"affectedGroups"}}),o("b-form-group",{attrs:{label:"Type (e.g. Sex, Age)","label-for":"newGroupType"}},[o("b-form-input",{model:{value:e.newGroupType,callback:function(t){e.newGroupType=t},expression:"newGroupType"}})],1),o("b-form-group",{attrs:{label:"Details (e.g. > Female, Under 20 years old)","label-for":"newGroupDetail"}},[o("b-form-input",{model:{value:e.newGroupDetail,callback:function(t){e.newGroupDetail=t},expression:"newGroupDetail"}})],1),o("b-form-group",[o("b-button",{attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.addGroup.apply(null,arguments)}}},[e._v("Add")])],1)],1)],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",[o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Attributes and value details of affected groups (Attribute:Details)")]),o("th",{attrs:{scope:"col"}},[e._v(" ")])])]),o("tbody",e._l(e.bias.affectedGroups,(function(t,r){return o("tr",{key:r,attrs:{id:t+"-"+r}},[o("td",{staticClass:"align-middle"},[e._v(" "+e._s(t.type)+": "+e._s(t.detail))]),o("td",{attrs:{align:"right"}},[o("b-button",{attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.removeGroup(r)}}},[o("i",{staticClass:"bi bi-x-circle fs-5"})])],1)])})),0)])])],1)],1)]),e._m(3),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"Add intersectionality (which combinations of groups were affected)","label-for":"intersects"}},[o("multiselect",{attrs:{options:e.intersectsOptions,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Start typing to search for an item","preselect-first":!1},model:{value:e.newIntersectGroups,callback:function(t){e.newIntersectGroups=t},expression:"newIntersectGroups"}})],1),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form-group",{attrs:{label:"How was this combination of groups affected?","label-for":"newIntersectDetail"}},[o("b-form-textarea",{attrs:{id:"newIntersectDetail",rows:"3","max-rows":"6"},model:{value:e.newIntersectDetail,callback:function(t){e.newIntersectDetail=t},expression:"newIntersectDetail"}})],1)],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form-group",[o("b-button",{attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.addIntersect.apply(null,arguments)}}},[e._v("Add")])],1)],1)]),o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Intersections")]),o("th",{attrs:{scope:"col"}},[e._v(" ")])])]),o("tbody",e._l(e.bias.intersects,(function(t,r){return o("tr",{key:r,attrs:{id:r}},[o("td",[e._v(e._s(t.groups.join(" | "))+" "),o("div",{staticClass:"detail"},[e._v(" "+e._s(t.detail)+" ")])]),o("td",{attrs:{align:"right"}},[o("b-button",{attrs:{variant:"link"},on:{click:function(t){return t.preventDefault(),e.removeIntersect(r)}}},[o("i",{staticClass:"bi bi-x-circle fs-5"})])],1)])})),0)])],1)],1)])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h4",[e._v("Bias Discovery")]),o("div",{staticClass:"form-text"},[o("p",[e._v("Data about the discovery, e.g. how the bias was discovered, by whom and what motivated them to look for it, could help in understanding more about the way in which bias is discovered and lead to improvements in detection, education etc. For example, it could inform on questions with regards to the roles that discover more or less bias, how they differ in discovering and reporting on it and what type bias they tend to discover. ")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h4",{staticClass:"mt-4"},[e._v("Validating and Quantifying")]),o("div",{staticClass:"form-text"},[o("p",[e._v("We want to know What methodologied, tools, metrics etc were used to detect and/or quantify the bias. Any information you can share about the process is helpful. "),o("br"),e._v(" If you are up to it, please indicate if you used one of the tools we list, and let us know if you've used a tool that is not on the list.")])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h4",{staticClass:"mt-4"},[e._v("Labels/Protected Attributes")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h4",{staticClass:"mt-4"},[e._v("Intersectionality")]),o("div",{staticClass:"form-text"},[o("p",[e._v(" intersectionality refers to an overlap in the groups you lisetd above, for example when an indvidual who belongs to both Sex:female group and also to Income:low is discirimated against in the system compared to individuals who are not in this specific group combination.")])])])])}],!1,null,"0514538a",null);t.default=component.exports},318:function(e,t,o){"use strict";o.r(t);var r={name:"datasetTab",props:{bias:{type:Object,default:function(){return{}}}},data:function(){return{sourceTypeOptions:["Publicly available","Commerically (bought it)","Owned by my company","Owned by my academic institution"]}}},n=o(53),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h3",{staticClass:"mb-2"},[e._v("The Dataset")]),e._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"How was the dataset sourced?","label-for":"sourceType"}},[o("b-form-select",{attrs:{options:e.sourceTypeOptions},model:{value:e.bias.sourceType,callback:function(t){e.$set(e.bias,"sourceType",t)},expression:"bias.sourceType"}})],1),"Publicly available"!==e.bias.sourceType?o("b-form-group",{attrs:{label:"Please provide details (who owns it etc.)","label-for":"sourceTypeDetails"}},[o("b-form-textarea",{attrs:{id:"sourceTypeDetails",rows:"3","max-rows":"6"},model:{value:e.bias.sourceTypeDetails,callback:function(t){e.$set(e.bias,"sourceTypeDetails",t)},expression:"bias.sourceTypeDetails"}})],1):e._e(),o("b-form-group",{attrs:{label:"Can you provide the dataset?","label-for":"canSupplyDataset"}},[o("toggle",{attrs:{value:e.bias.canSupplyDataset},on:{toggled:function(t){return e.bias.canSupplyDataset=t}}})],1),e.bias.canSupplyDataset?o("div",[o("b-form-group",{attrs:{label:"Upload the dataset","label-for":"datasetFile"}},[o("b-form-file",{attrs:{id:"datasetFile",state:Boolean(e.bias.datasetFile),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.bias.datasetFile,callback:function(t){e.$set(e.bias,"datasetFile",t)},expression:"bias.datasetFile"}})],1),o("b-form-group",{attrs:{label:"OR, provide URL access to it","label-for":"datasetUrl"}},[o("b-form-input",{model:{value:e.bias.datasetUrl,callback:function(t){e.$set(e.bias,"datasetUrl",t)},expression:"bias.datasetUrl"}})],1),o("b-form-group",{attrs:{label:"Can this dataset be shared with other users of this system?","label-for":"canShareDataset"}},[o("toggle",{attrs:{value:e.bias.canShareDataset},on:{toggled:function(t){return e.bias.canShareDataset=t}}})],1)],1):o("div",[o("b-form-group",{attrs:{label:"Please describe the dataset (optional)","label-for":"sourceTypeDetails"}},[o("b-form-textarea",{attrs:{id:"sourceTypeDetails",rows:"3","max-rows":"6"},model:{value:e.bias.sourceTypeDetails,callback:function(t){e.$set(e.bias,"sourceTypeDetails",t)},expression:"bias.sourceTypeDetails"}})],1)],1)],1)],1)])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row"},[o("div",{staticClass:"col form-text"},[o("p",[e._v(" Having access to the dataset would be very beneficial for future analysis of the bias. If you can - please provide the dataset (upload it or provide a publicly available url). If you cannot provide it for proprietary or privacy reasons we'd still appreciate any information you can provide about it. "),o("br"),e._v(" If you do provide the dataset, please make sure the data is anonymised or de-identified (see "),o("a",{attrs:{href:"https://duckduckgo.com/?q=anonymisation+tools",target:"_blank"}},[e._v("anonymization tools")]),e._v("). ")])])])}],!1,null,"577efdcb",null);t.default=component.exports;installComponents(component,{Toggle:o(302).default})},319:function(e,t,o){"use strict";o.r(t);var r={name:"reviewTab",props:{bias:{type:Object,default:function(){return{}}}},data:function(){return{statusOptions:["Pending Review","Submitted","Confirmed","Rejected"]}}},n=o(53),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h4",[e._v("Dr Jason James (jjames@gmail.com) - 10 Nov 2021")]),o("b-form-group",{attrs:{label:"Reviewer comments"}},[o("div",{staticClass:"form-text"},[o("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])])],1)])])}),[],!1,null,"27c2492c",null);t.default=component.exports},325:function(e,t,o){"use strict";o.r(t);var r={name:"datasetTab",props:{bias:{type:Object,default:function(){return{}}}},data:function(){return{statusOptions:["Pending Review","Submitted","Confirmed","Rejected"]}}},n=o(53),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-form",[o("b-form-group",{attrs:{label:"Do you give permission for peer review?","label-for":"reviewAllowed"}},[o("toggle",{attrs:{value:e.bias.allowPeerReview},on:{toggled:function(t){return e.bias.allowPeerReview=t}}})],1),o("b-form-group",{attrs:{label:"Any further information that might be useful?","label-for":"moreInfo"}},[o("b-form-textarea",{attrs:{id:"moreInfo",rows:"3","max-rows":"6"},model:{value:e.bias.moreInfo,callback:function(t){e.$set(e.bias,"moreInfo",t)},expression:"bias.moreInfo"}})],1),o("b-form-group",{attrs:{label:"Status","label-for":"status"}},[o("b-form-select",{attrs:{options:e.statusOptions},model:{value:e.bias.status,callback:function(t){e.$set(e.bias,"status",t)},expression:"bias.status"}})],1)],1)],1)])])}),[],!1,null,"2953dc20",null);t.default=component.exports;installComponents(component,{Toggle:o(302).default})},346:function(e,t,o){"use strict";o.r(t);var r=o(317),n=o(318),l=o(319),c={components:{toggle:o(302).default,DatasetTab:n.default,BiasTab:r.default,ReviewTab:l.default},data:function(){return{bias:{sourceType:"Commerically (bought it)",sourceTypeDetails:"",canSupplyDataset:!0,datasetFile:null,datasetUrl:"",canShareDataset:!0,whoDiscovered:"",whoDiscoveredDetail:"",howDiscovered:"",methodologies:"",tools:[],otherTool:"",affectedGroups:[],intersects:[],allowPeerReview:!0,moreInfo:"",status:"Pending Review",methodologiesAsessment:""},tabIndex:0,prePopBiases:[{sourceType:"Publicly available",sourceTypeDetails:"",canSupplyDataset:!0,datasetFile:null,datasetUrl:"https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Original%29",canShareDataset:!0,whoDiscovered:"Developer(s)",whoDiscoveredDetail:"",howDiscovered:"Every project we work on includes a bias and fairness assessment phase. It is usually done by one of the more experienced developers and includes manual/visual inspection of the system and validation through AI Fairness 360 and a few algorithms we have built in-house",methodologies:"This, that and the other",tools:[{name:"AI Fairness 360",link:"https://aif360.mybluemix.net/",desc:"An extensible open source toolkit can help you examine, report, and mitigate discrimination and bias in machine learning models throughout the AI application lifecycle"},{name:"FairLens",link:"https://www.synthesized.io/fairlens",desc:"An open-source Python library"}],otherTool:"We've been working on releasing our own algorithm as open source late ths year.",affectedGroups:[{type:"Sex",detail:"Female < 50"},{type:"Sex",detail:"Female > 50"},{type:"Sex",detail:"Male < 18"},{type:"Religion",detail:"Christian"},{type:"Religion",detail:"Muslim"},{type:"Religion",detail:"Hindu"},{type:"Religion",detail:"Jewish"},{type:"Household income",detail:"Under $50K p.a."},{type:"Household income",detail:"$50-80K p.a."},{type:"Household income",detail:"over $50K p.a."}],intersects:[{groups:["Religion - Christian","Sex - Female < 50"],detail:"Were less likely to get help"},{groups:["Household income - Under $50K p.a.","Sex - Male < 18","Religion - Hindu"],detail:"More likely to experience delays in getting help"}],allowPeerReview:!0,moreInfo:"",status:"Pending Review",methodologiesAsessment:""}]}},mounted:function(){this.onMounted()},methods:{onMounted:function(){this.$route.query.id&&(this.bias=this.prePopBiases[this.$route.query.id])}}},d=o(53),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container p-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h3",{staticClass:"mb-3"},[o("span",[e._v("Bias Detection Events")]),o("span",{staticStyle:{float:"right","font-size":"14px"}},[o("NuxtLink",{staticClass:"nav-link pr-0",attrs:{to:"list"}},[e._v("Back to dashboard")])],1)]),o("b-tabs",{attrs:{small:"",card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[o("b-tab",{attrs:{title:"The Dataset"}},[o("dataset-tab",{attrs:{bias:e.bias}}),o("div",{staticClass:"text-center"},[o("b-button-group",{staticClass:"mt-2"},[o("b-button",{on:{click:function(t){e.tabIndex++}}},[e._v("Next")])],1)],1)],1),o("b-tab",{attrs:{title:"The Bias"}},[o("bias-tab",{attrs:{bias:e.bias}}),o("div",{staticClass:"text-center"},[o("b-button-group",{staticClass:"d-grid gap-2 d-md-block"},[o("b-button",{on:{click:function(t){e.tabIndex--}}},[e._v("Previous")]),e._v("   "),o("b-button",{on:{click:function(t){e.tabIndex++}}},[e._v("Next")])],1)],1)],1),o("b-tab",{attrs:{title:"The Report"}},[o("report-tab",{attrs:{bias:e.bias}}),o("div",{staticClass:"text-center"},[o("b-button-group",{staticClass:"d-grid gap-2 d-md-block"},[o("b-button",{on:{click:function(t){e.tabIndex--}}},[e._v("Previous")]),e._v("   "),o("b-button",{on:{click:function(t){e.tabIndex++}}},[e._v("Next")])],1)],1)],1),o("b-tab",{attrs:{title:"Review"}},[o("review-tab",{attrs:{bias:e.bias}}),o("div",{staticClass:"text-center"},[o("b-button-group",{staticClass:"d-grid gap-2 d-md-block"},[o("b-button",{on:{click:function(t){e.tabIndex--}}},[e._v("Previous")])],1)],1)],1)],1)],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DatasetTab:o(318).default,BiasTab:o(317).default,ReportTab:o(325).default,ReviewTab:o(319).default})}}]);