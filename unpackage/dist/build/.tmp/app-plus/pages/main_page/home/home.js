(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main_page/home/home"],{"0676":function(e,i,t){"use strict";t.r(i);var o=t("e4e6"),s=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(i,e,function(){return o[e]})}(n);i["default"]=s.a},"232c":function(e,i,t){"use strict";t.r(i);var o=t("8801"),s=t("0676");for(var n in s)"default"!==n&&function(e){t.d(i,e,function(){return s[e]})}(n);var a=t("2877"),r=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);i["default"]=r.exports},8801:function(e,i,t){"use strict";var o=function(){var e=this,i=e.$createElement;e._self._c},s=[];t.d(i,"a",function(){return o}),t.d(i,"b",function(){return s})},e4e6:function(e,i,t){"use strict";(function(e,t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{isCard:!0,loadProgress:0,CustomBar:this.CustomBar,cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!1,towerStart:0,direction:"",cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:5,gridBorder:!1}},methods:{IsCard:function(e){this.isCard=e.detail.value},DotStyle:function(e){this.dotStyle=e.detail.value},cardSwiper:function(e){this.cardCur=e.detail.current},TowerSwiper:function(e){for(var i=this[e],t=0;t<i.length;t++)i[t].zIndex=parseInt(i.length/2)+1-Math.abs(t-parseInt(i.length/2)),i[t].mLeft=t-parseInt(i.length/2);this.swiperList=i},TowerStart:function(e){this.towerStart=e.touches[0].pageX},TowerMove:function(e){this.direction=e.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(e){var i=this.direction,t=this.swiperList;if("right"==i){for(var o=t[0].mLeft,s=t[0].zIndex,n=1;n<this.swiperList.length;n++)this.swiperList[n-1].mLeft=this.swiperList[n].mLeft,this.swiperList[n-1].zIndex=this.swiperList[n].zIndex;this.swiperList[t.length-1].mLeft=o,this.swiperList[t.length-1].zIndex=s}else{for(var a=t[t.length-1].mLeft,r=t[t.length-1].zIndex,l=this.swiperList.length-1;l>0;l--)this.swiperList[l].mLeft=this.swiperList[l-1].mLeft,this.swiperList[l].zIndex=this.swiperList[l-1].zIndex;this.swiperList[0].mLeft=a,this.swiperList[0].zIndex=r}this.direction="",this.swiperList=this.swiperList},LoadProgress:function(){var e=this;this.loadProgress=this.loadProgress+3,this.loadProgress<100?setTimeout(function(){e.LoadProgress()},100):this.loadProgress=0},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},Gridchange:function(e){this.gridCol=e.detail.value},toHomelist:function(i){e.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},toHomelist2:function(i){e.navigateTo({url:"/pages/main_page/homelist/homelist",animationType:"pop-in",animationDuration:200})},tovideo:function(i){e.navigateTo({url:"/pages/main_page/video/index",animationType:"pop-in",animationDuration:200})},tovideo2:function(i){e.navigateTo({url:"/pages/main_page/homelist/detail/detail?title=凡真正的恩典因不完整而美丽"})}},onLoad:function(){console.log(t("页面加载事件"," at pages\\main_page\\home\\home.vue:374")),this.LoadProgress(),this.TowerSwiper("swiperList")}};i.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["e9aa","common/runtime","common/vendor"]]]);