(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3],{308:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("3d5aa385",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r(308)},314:function(t,e,r){var n=r(59)(!1);n.push([t.i,".countTag[data-v-2d39a725]{background-color:#3f6ca0;border-radius:50%;color:#fff;margin:10px;padding:10px}",""]),t.exports=n},324:function(t,e,r){"use strict";r.r(e);var n={name:"countTag",props:{value:{type:String,default:""}}},o=(r(313),r(53)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"countTag"},[t._v(" "+t._s(t.value)+" ")])}),[],!1,null,"2d39a725",null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{fields:["date","reported_by","my_role","status","peer"],items:[{date:"12-02-2021",reported_by:"John Smith",my_role:"Reporter",status:"Submitted",peer:"requested 2"}]}}},o=r(53),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container p-5"},[r("div",{staticClass:"title-wrap"},[r("h3",[t._v("Reported Bias Detection Events")]),r("b-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"report"}},[t._v("New")])],1),r("table",{staticClass:"table"},[t._m(0),r("tbody",[r("tr",[r("td",[t._v("12 March 2021")]),r("td",[t._v("Nitzan Karni (pre-populated sample 1)")]),r("td",[t._v("Reporter")]),r("td",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"success",size:"sm"}},[t._v("SUBMITTED")])],1),r("td",{staticClass:"text-center"},[r("b-button",{attrs:{size:"sm",variant:"outline-primary"}},[t._v("Requested "),r("count-tag",{attrs:{value:"2"}})],1)],1),r("td",{staticClass:"text-center"},[r("b-button",{attrs:{size:"sm",variant:"primary",to:"report?id=0"}},[t._v("View")])],1)])])]),t._m(1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Date")]),r("th",{attrs:{scope:"col"}},[t._v("Reported By")]),r("th",{attrs:{scope:"col"}},[t._v("My Role")]),r("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Status")]),r("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Peer Review Status + count")]),r("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col form-text ",staticStyle:{background:"white"}},[r("p",[t._v("The list above includes an example record of bias that was detected in an AI system")]),r("p",[t._v("The NEW button will open an empty record. Feel free to try entering a new one. The data will not be persisted to a database; a browser refresh will reload the initial state.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CountTag:r(324).default})}}]);