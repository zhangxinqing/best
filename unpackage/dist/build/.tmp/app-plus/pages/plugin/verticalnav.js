(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plugin/verticalnav"],{"0135":function(t,s,a){"use strict";a.r(s);var i=a("75c5"),e=a("30b2");for(var c in e)"default"!==c&&function(t){a.d(s,t,function(){return e[t]})}(c);a("cf33");var l=a("2877"),r=Object(l["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=r.exports},"30b2":function(t,s,a){"use strict";a.r(s);var i=a("9fc3"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(s,t,function(){return i[t]})}(c);s["default"]=e.a},"75c5":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",[a("view",{staticClass:"fixed"},[a("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white",mpcomid:"2596d9bc-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("垂直导航")])],1)],1),a("swiper",{staticClass:"screen-swiper round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(4,function(t,s){return a("swiper-item",{key:s,attrs:{mpcomid:"2596d9bc-1-"+s}},[a("image",{attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big3900"+s+".jpg",mode:"aspectFill"}})])})),a("view",{staticClass:"VerticalBox"},[a("scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-top":t.verticalNavTop}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"cu-item",class:i==t.tabCur?"text-green cur":"",attrs:{"data-id":i,eventid:"2596d9bc-0-"+i},on:{tap:t.TabSelect}},[t._v("Tab-"+t._s(s.name))])})),a("scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-into-view":"main-"+t.mainCur,eventid:"2596d9bc-1"},on:{scroll:t.VerticalMain}},t._l(t.list,function(s,i){return a("view",{key:i,staticClass:"padding-top padding-lr",attrs:{id:"main-"+i}},[a("view",{staticClass:"cu-bar solid-bottom bg-white"},[a("view",{staticClass:"action"},[a("text",{staticClass:"cuIcon-title text-green"}),t._v("Tab-"+t._s(s.name))])]),a("view",{staticClass:"cu-list menu-avatar"},[a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[t._v("凯尔")]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[a("text",{staticClass:"cuIcon-infofill text-red  margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("view",{staticClass:"cu-tag badge"},[t._v("99+")])]),a("view",{staticClass:"content"},[a("view",{staticClass:"text-grey"},[a("text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])]),a("view",{staticClass:"cu-item "},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("view",{staticClass:"content"},[a("view",{staticClass:"text-pink"},[a("text",{staticClass:"text-cut"},[t._v("莫甘娜")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item grayscale"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])])]),a("view",{staticClass:"cu-item cur"},[a("view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("view",{staticClass:"cu-tag badge"})]),a("view",{staticClass:"content"},[a("view",[a("text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])]),a("view",{staticClass:"text-gray text-sm flex"},[a("text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")])])]),a("view",{staticClass:"action"},[a("view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})])])])])}))],1)],1)},e=[];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"9a20":function(t,s,a){"use strict";a("a0fc");var i=c(a("b0ce")),e=c(a("0135"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},"9fc3":function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{list:[],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){t.showLoading({title:"加载中...",mask:!0});for(var s=[{}],a=0;a<26;a++)s[a]={},s[a].name=String.fromCharCode(65+a),s[a].id=a;this.list=s,this.listCur=s[0]},onReady:function(){t.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(s){var a=this,i=0;if(this.load){for(var e=function(s){var e=t.createSelectorQuery().select("#main-"+a.list[s].id);e.fields({size:!0},function(t){a.list[s].top=i,i+=t.height,a.list[s].bottom=i}).exec()},c=0;c<this.list.length;c++)e(c);this.load=!1}var l=s.detail.scrollTop+10;for(c=0;c<this.list.length;c++)if(l>this.list[c].top&&l<this.list[c].bottom)return this.verticalNavTop=50*(this.list[c].id-1),this.tabCur=this.list[c].id,console.log(l),!1}}};s.default=a}).call(this,a("6e42")["default"])},cf33:function(t,s,a){"use strict";var i=a("ea83"),e=a.n(i);e.a},ea83:function(t,s,a){}},[["9a20","common/runtime","common/vendor"]]]);