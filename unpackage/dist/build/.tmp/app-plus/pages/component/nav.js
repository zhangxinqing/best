(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/nav"],{"2d97":function(t,e,a){"use strict";a.r(e);var s=a("e616"),c=a("a7fa");for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);var n=a("2877"),r=Object(n["a"])(c["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},"34d6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};e.default=s},9827:function(t,e,a){"use strict";a("a0fc");var s=i(a("b0ce")),c=i(a("2d97"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(c.default))},a7fa:function(t,e,a){"use strict";a.r(e);var s=a("34d6"),c=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=c.a},e616:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0,mpcomid:"0b60bf40-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("导航栏")])],1),t._l(10,function(e,s){return s==t.TabCur?a("view",{key:s,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(s))]):t._e()}),t._m(0),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(10,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-green cur":"",attrs:{"data-id":s,eventid:"0b60bf40-0-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(1),a("scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-blue cur":"",attrs:{"data-id":s,eventid:"0b60bf40-1-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(2),a("scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[a("view",{staticClass:"flex text-center"},t._l(4,function(e,s){return a("view",{key:s,staticClass:"cu-item flex-sub",class:s==t.TabCur?"text-orange cur":"",attrs:{"data-id":s,eventid:"0b60bf40-2-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])}))]),t._m(3),a("scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":""}},t._l(3,function(e,s){return a("view",{key:s,staticClass:"cu-item",class:s==t.TabCur?"text-white cur":"",attrs:{"data-id":s,eventid:"0b60bf40-3-"+s},on:{tap:t.tabSelect}},[t._v("Tab"+t._s(s))])})),t._m(4),a("scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":""}},[a("view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0",eventid:"0b60bf40-4"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-camerafill"}),t._v("数码")]),a("view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1",eventid:"0b60bf40-5"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")]),a("view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2",eventid:"0b60bf40-6"},on:{tap:t.tabSelect}},[a("text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")])])],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c})}},[["9827","common/runtime","common/vendor"]]]);