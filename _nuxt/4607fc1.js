(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(19),n(53);function r(){var t=localStorage.getItem("alvarobrey.com.darkTheme");return t?"true"===t:!(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches)}function o(t){localStorage.setItem("alvarobrey.com.darkTheme",t.toString())}},149:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{title:{type:String,default:void 0}}}),o=n(27),l=n(26),c=n.n(l),d=n(328),v=n(329),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"10",lg:"8"}},[this._t("title",[this.title?e("h4",{staticClass:"text-h4 primary--text",domProps:{textContent:this._s(this.title)}}):this._e()]),this._v(" "),this._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VRow:v.a})},189:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(92),l=r.a.extend({props:{value:{type:Boolean,default:!1}},computed:{isOpen:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},items:function(){return o.b}}}),c=n(27),d=n(26),v=n.n(d),f=n(330),m=n(186),h=n(113),_=n(93),x=n(337),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title primary--text"},[t._v("\n        Álvaro Brey\n      ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",nuxt:"",to:t.localePath({name:e.routeName})}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(t.$t("nav."+e.translationKey))+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VDivider:f.a,VList:m.a,VListItem:h.a,VListItemContent:_.a,VListItemTitle:_.b,VNavigationDrawer:x.a})},190:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(146),l=r.a.extend({name:"DarkModeSwitcher",computed:{isDark:{get:function(){return this.$vuetify.theme.dark},set:function(t){this.setValue(t)}}},methods:{setValue:function(t){this.$vuetify.theme.dark=t,Object(o.b)(t)}}}),c=(n(304),n(27)),d=n(26),v=n.n(d),f=n(336),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-switch",{staticClass:"dark-mode-switcher ma-0",attrs:{"aria-label":t.$t("aria.darkMode"),"prepend-icon":"mdi-white-balance-sunny","append-icon":"mdi-moon-waning-crescent",color:"primary"},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VSwitch:f.a})},191:function(t,e,n){"use strict";n.r(e);n(31);var r=n(0),o=n(192),l=n(92),c=r.a.extend({name:"Header",components:{HeaderNav:o.default},computed:{shouldShowNav:function(){return!Object(l.a)(this.$nuxt.$route.name)},isMobile:function(){return this.$nuxt.$vuetify.breakpoint.smAndDown}}}),d=n(27),v=n(26),f=n.n(v),m=n(339),h=n(332),_=n(333),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.shouldShowNav?n("v-app-bar",{attrs:{flat:!t.isMobile,app:""}},[t.isMobile?n("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("toggle-sidebar",!0)}}}):n("HeaderNav"),t._v(" "),n("v-spacer")],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{HeaderNav:n(192).default}),f()(component,{VAppBar:m.a,VAppBarNavIcon:h.a,VSpacer:_.a})},192:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(92),l=r.a.extend({name:"HeaderNav",computed:{pages:function(){return o.b}}}),c=n(27),d=n(26),v=n.n(d),f=n(331),m=n(338),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{centered:"",optional:""}},t._l(t.pages,(function(e){return n("v-tab",{key:e.routeName,attrs:{nuxt:"",to:t.localePath({name:e.routeName})},domProps:{textContent:t._s(t.$t("nav."+e.translationKey))}})})),1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VTab:f.a,VTabs:m.a})},236:function(t,e,n){},241:function(t,e,n){"use strict";var r=n(189),o=n(190),l=n(146),c=n(191),d={components:{DarkModeSwitcher:o.default,SidebarNav:r.default,Header:c.default},data:function(){return{sidebarOpen:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.$nextTick((function(){t.$vuetify.theme.dark=Object(l.a)()}))}))},methods:{toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}},v=n(27),f=n(26),m=n.n(f),h=n(334),_=n(340),x=n(335),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app"},[n("DarkModeSwitcher"),t._v(" "),n("Header",{on:{"toggle-sidebar":t.toggleSidebar}}),t._v(" "),n("SidebarNav",{model:{value:t.sidebarOpen,callback:function(e){t.sidebarOpen=e},expression:"sidebarOpen"}}),t._v(" "),n("v-main",{staticClass:"text-body-1"},[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{DarkModeSwitcher:n(190).default,Header:n(191).default,SidebarNav:n(189).default}),m()(component,{VApp:h.a,VContainer:_.a,VMain:x.a})},245:function(t,e,n){n(246),t.exports=n(247)},290:function(t,e,n){},304:function(t,e,n){"use strict";n(236)},77:function(t,e,n){"use strict";var r=n(149),o={components:{BasicPage:r.default},props:{error:{type:Object,default:null}},computed:{title:function(){return 404===this.error.statusCode?this.$tc("error.404.title"):this.$tc("error.other.title")},description:function(){return 404===this.error.statusCode?this.$tc("error.404.description"):this.$tc("error.other.description")}},head:function(){return{title:this.title}}},l=n(27),c=n(26),d=n.n(c),v=n(114),f=n(329),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BasicPage",{attrs:{title:t.title}},[n("p",{staticClass:"text-subtitle-2 mb-8"},[t._v(t._s(t.description))]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{color:"primary",to:t.localePath({name:"home"}),nuxt:""}},[t._v("\n      "+t._s(t.$t("nav.home"))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{BasicPage:n(149).default}),d()(component,{VBtn:v.a,VRow:f.a})},92:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(185),n(46);var r=Object.freeze([{translationKey:"home",routeName:"index"},{translationKey:"me",routeName:"me"},{translationKey:"cv",routeName:"cv"},{translationKey:"contact",routeName:"contact"},{translationKey:"about",routeName:"about"}]);function o(t){return null==t?void 0:t.startsWith("index")}}},[[245,7,1,8]]]);