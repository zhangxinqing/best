(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/navTab"],{"1ec4":function(t,n,i){},"2d56":function(t,n,i){"use strict";var e=i("1ec4"),a=i.n(e);a.a},"58ee":function(t,n,i){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"navTab",props:{tabBars:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var n=this;t.getSystemInfo({success:function(t){n.isWidth=t.windowWidth/n.tabBars.length,n.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$parent.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t){var n=t-2;n=n<=0?0:n,this.toView="id".concat(n),console.log(i(t," at colorui\\components\\navTab.vue:72")),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$parent.currentTab=t}}};n.default=e}).call(this,i("6e42")["default"],i("0de9")["default"])},a817:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},b93d:function(t,n,i){"use strict";i.r(n);var e=i("a817"),a=i("d71b");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("2d56");var u=i("2877"),c=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},d71b:function(t,n,i){"use strict";i.r(n);var e=i("58ee"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/navTab-create-component',
    {
        'colorui/components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b93d"))
        })
    },
    [['colorui/components/navTab-create-component']]
]);                
