(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{387:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4eb66aee",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);n(18),n(35),n(248);var o=n(0).a.extend({props:{icon:{type:String,required:!0},translationKey:{type:String,required:!0},link:{type:String,required:!0}},computed:{formattedTooltip:function(){return this.link.replace("https://","").replace("mailto:","")}}}),r=(n(394),n(29)),l=n(28),c=n.n(l),d=n(372),v=n(427),f=n(191),m=n(437),y=n(398),h=n.n(y),k=n(75),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",lg:"3",align:"center",justify:"center"}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("a",t._g({directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{display:"block"},attrs:{href:t.link,target:"_blank"}},o),[n("v-icon",{attrs:{size:"120",color:r?"primary":""}},[t._v("\n            "+t._s(t.icon)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-subtitle-1",class:{"text--primary":r}},[t._v("\n            "+t._s(t.$t("page.contact.item."+t.translationKey))+"\n          ")])],1)]}}],null,!0)})]}}])},[t._v(" "),n("span",[t._v(t._s(t.formattedTooltip))])])],1)}),[],!1,null,"4a07cd55",null);e.default=component.exports;c()(component,{VCol:d.a,VHover:v.a,VIcon:f.a,VTooltip:m.a}),h()(component,{Ripple:k.a})},394:function(t,e,n){"use strict";n(387)},395:function(t,e,n){(e=n(9)(!1)).push([t.i,"a[data-v-4a07cd55]{outline:none;text-decoration:inherit;color:inherit}a[data-v-4a07cd55]::-moz-focus-inner{border:0}",""]),t.exports=e},434:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(152),l=n(389),c=[{key:"linkedIn",icon:"mdi-linkedin",link:"https://linkedin.com/in/alvarobrey"},{key:"gitHub",icon:"mdi-github",link:"https://github.com/alvarobrey"},{key:"twitter",icon:"mdi-twitter",link:"https://twitter.com/AlvaroBrey_"},{key:"mail",icon:"mdi-email",link:"mailto:alvaro.brv@gmail.com"}],d=o.a.extend({components:{ContactItemDisplay:l.default,BasicPage:r.default},data:function(){return{items:c}},head:function(){return{title:this.$tc("nav.contact")}}}),v=n(29),f=n(28),m=n.n(f),y=n(373),component=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("BasicPage",{attrs:{title:this.$t("page.contact.title")}},[e("p",{staticClass:"text-body-1"},[this._v("\n    "+this._s(this.$t("page.contact.intro"))+"\n  ")]),this._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},this._l(this.items,(function(t){return e("ContactItemDisplay",{key:t.key,attrs:{"translation-key":t.key,link:t.link,icon:t.icon}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{ContactItemDisplay:n(389).default,BasicPage:n(152).default}),m()(component,{VRow:y.a})}}]);