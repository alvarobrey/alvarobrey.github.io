(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{383:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,default:void 0}}}),o=n(34),c=n(36),l=n.n(c),f=n(384),d=n(385),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"10",lg:"8"}},[this._t("title",[this.title?e("h4",{staticClass:"text-h4 primary--text",domProps:{textContent:this._s(this.title)}}):this._e()]),this._v(" "),this._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})},384:function(t,e,n){"use strict";n(48),n(24),n(155),n(87),n(251),n(18),n(59),n(21),n(19),n(67),n(43),n(49),n(60),n(78);var r=n(2),o=(n(250),n(1)),c=n(79),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],v=y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=y.reduce((function(t,e){return t["offset"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),j=y.reduce((function(t,e){return t["order"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(O),order:Object.keys(j)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},385:function(t,e,n){"use strict";n(16),n(48),n(24),n(155),n(251),n(59),n(21),n(19),n(35),n(67),n(43),n(60),n(78);var r=n(2),o=(n(250),n(1)),c=n(79),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],v=["start","end","center"];function O(t,e){return y.reduce((function(n,r){return n[t+Object(l.s)(r)]=e(),n}),{})}var j=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},m=O("align",(function(){return{type:String,default:null,validator:j}})),h=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=O("justify",(function(){return{type:String,default:null,validator:h}})),P=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},S=O("alignContent",(function(){return{type:String,default:null,validator:P}})),x={align:Object.keys(m),justify:Object.keys(w),alignContent:Object.keys(S)},_={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},m),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:P}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},431:function(t,e,n){"use strict";n.r(e);n(61);var r=n(1),o=n(93),c=n(383),l=r.a.extend({components:{BasicPage:c.default},computed:{filteredPages:function(){return o.b.filter((function(t){return!Object(o.a)(t.routeName)}))}}}),f=n(34),d=n(36),y=n.n(d),v=n(117),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BasicPage",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h2",{staticClass:"text-h2 text-center my-12 primary--text",domProps:{innerHTML:t._s(t.$t("page.index.greeting"))}})]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"px-3"},[n("p",{domProps:{innerHTML:t._s(t.$t("page.index.introduction"))}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$t("page.index.interests"))}})]),t._v(" "),n("div",{staticClass:"d-flex flex-column flex-sm-row justify-center align-center mt-12"},t._l(t.filteredPages,(function(e){return n("v-btn",{key:e.routeName,staticClass:"ma-2",attrs:{color:"primary",nuxt:"",to:t.localePath({name:e.routeName})}},[t._v("\n      "+t._s(t.$t("nav."+e.translationKey))+"\n    ")])})),1)])}),[],!1,null,null,null);e.default=component.exports;y()(component,{BasicPage:n(383).default}),y()(component,{VBtn:v.a})}}]);