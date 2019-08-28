<template>
	<view>
		<cu-custom :bgColor="Defaulttheam.headcls" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">图片美化</block>
		</cu-custom>
		<movable-area class="filterimgbox">
			<movable-view style="width: 100%;">
					<img :src="orimg" :class="filteritem[filterindex].cls" style="width: 100%;height: 760rpx;" mode="aspectFit" />
					
			</movable-view>	
			
			<movable-view class="moveitem" :x="addr.x" :y="addr.y" direction="all" @change="addrchange">
				<text class='cuIcon-locationfill ' :class="Defaulttheam.textcls"></text>
				(x:{{addr.x}},y:{{addr.y}}){{addr.title}}
			</movable-view>
			<movable-view class="moveitem mtag1" :x="tag.x" :y="tag.y" direction="all" @change="tagchange">
				<text class='cuIcon-appreciate ' :class="Defaulttheam.textcls"></text>
				(x:{{tag.x}},y:{{tag.y}}){{tag.title}}
			</movable-view>
			<movable-view class="moveitem mtag2" :x="good.x" :y="good.y" direction="all" @change="goodchange">
				(x:{{good.x}},y:{{good.y}}){{good.title}}
			</movable-view>
		</movable-area>
		
		
		<view class="cu-form-group" @tap="getRegeo">
			<button class="cu-btn round sm">位置</button>
			<button class="cu-btn round sm">标签</button>
			<button class="cu-btn round sm">商品</button>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view class="filteritem" @tap="changefilter" v-for="(item,itemindex) in filteritem" :key="itemindex" :data-index="itemindex">
				<img :class="item.cls" :src="orimg" style="width: 200rpx;height: 200rpx;" mode="aspectFit" />
				<view>{{item.name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			filterindex:0,
			addr:{title:"软件大道172号",x:10,y:10},
			tag:{title:"女装、夏装、童装",x:0,y:0},
			good:{title:"荷边叶上衣短袖衫女2019夏季收腰荷叶边洋气小衫显瘦上衣 蓝粉色 S",x:0,y:0},
			orimg: '../../../../static/girl.jpg',
			filteritem:[
				{name:'原图',cls:'',remark:'#nofilter',tag:''},
				{name:'粉嫩',cls:'aden',remark:'aden',tag:''},
				{name:'静谧',cls:'reyes',remark:'reyes',tag:''},
				{name:'物语',cls:'perpetua',remark:'perpetua',tag:''},
				{name:'黑白',cls:'inkwell',remark:'inkwell',tag:''},
				{name:'暖茶',cls:'earlybird',remark:'earlybird',tag:''},
				{name:'迷宫',cls:'toaster',remark:'toaster',tag:''},
				{name:'童话',cls:'walden',remark:'walden',tag:''},
				{name:'自然',cls:'hudson',remark:'hudson',tag:''},
				{name:'霏颜',cls:'gingham',remark:'gingham',tag:''},
				{name:'格调',cls:'mayfair',remark:'mayfair',tag:''},
				{name:'增强',cls:'lofi',remark:'lofi',tag:''},
				{name:'白柔',cls:'xpro2',remark:'xpro2',tag:''},
				{name:'艳丽',cls:'_1977',remark:'_1977',tag:''},
				{name:'日系',cls:'brooklyn',remark:'brooklyn',tag:''}
			]
		};
	},
	methods: {
		changefilter(e){
			console.log(JSON.stringify(e));
			let index=e.currentTarget.dataset.index;
			this.filterindex=index;
		},
		addrchange(e){
			this.addr.x=e.detail.x;
			this.addr.y=e.detail.y;
		},
		tagchange(e){
			this.tag.x=e.detail.x;
			this.tag.y=e.detail.y;
		},
		goodchange(e){
			this.good.x=e.detail.x;
			this.good.y=e.detail.y;
		}
	}
};
</script>

<style>
	image{will-change: transform}
.filterimgbox {
	width: 100%;
	height: 760rpx;
	padding: 10rpx;
	
}
.filteritem {
	width: 200rpx;
	margin: 10rpx;
	display: inline-block;
}
.moveitem{
	width:400rpx;overflow:hidden; 
	top: 50%; left: 30%;color: #FFFFFF;background-color: #333333;
	height: 50rpx;
	line-height: 55rpx;
	padding: 10rpx;
	border-radius: 10rpx;
}
.mtag1{
	top:20%;
	left:30%
}
.mtag2{
	top:70%;
	left:30%
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
	height: 400rpx;
}
</style>
