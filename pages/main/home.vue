<template>
	<view>
		<ctmainpage v-if="PageCur=='homepage'"></ctmainpage>
		<ctaboutpage v-if="PageCur=='aboutpage'"></ctaboutpage>
		<ctsearch v-if="PageCur=='searchpage'"></ctsearch>
		<ctpost v-if="PageCur=='postpage'"></ctpost>
		<ctmy v-if="PageCur=='mypage'"></ctmy>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view :class="PageCur=='homepage'?'action '+Defaulttheam.textcls:'action'" @click="NavChange" data-cur="homepage">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<!-- <view :class="PageCur=='aboutpage'?'action text-orange':'action'" @click="NavChange" data-cur="aboutpage">
				<view class="cuIcon-similar"></view> 关于
			</view> -->
			<view :class="PageCur=='postpage'?'action add-action '+Defaulttheam.textcls:'action add-action'" @click="NavChange" data-cur="postpage">
				<button class="cu-btn cuIcon-add shadow" :class="Defaulttheam.btncls"></button>
				发布
			</view>
			<view :class="PageCur=='mypage'?'action '+Defaulttheam.textcls:'action'" @click="NavChange" data-cur="mypage">
				<view class="cuIcon-myfill"></view> 我的
			</view>
		</view>
	</view>
</template>

<script>
	import utiltool from '@/util/we7/resource/js/utiltool.js';
	export default {
		data() {
		return {
				Defaulttheam:this.Defaulttheam,
				PageCur: 'homepage'
			}
		},
		methods: {
			NavChange: function(e) {
				utiltool.mayiwoLog(e.currentTarget.dataset.cur);
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		onLoad() {
			utiltool.getGoodList({},function(res){
				utiltool.mayiwoLog(res);
			})
		}
	}
</script>

<style>

</style>
