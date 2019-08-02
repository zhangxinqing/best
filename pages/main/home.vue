<template>
	<view>
		<ctmainpage v-if="PageCur=='homepage'"></ctmainpage>
		<ctaboutpage v-if="PageCur=='aboutpage'"></ctaboutpage>
		<ctsearch v-if="PageCur=='searchpage'"></ctsearch>
		<ctpost v-if="PageCur=='postpage'"></ctpost>
		<ctmy v-if="PageCur=='mypage'"></ctmy>
		<view class="cu-bar tabbar bg-black shadow foot">
			<view :class="PageCur=='homepage'?'action text-orange':'action'" @click="NavChange" data-cur="homepage">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<!-- <view :class="PageCur=='aboutpage'?'action text-orange':'action'" @click="NavChange" data-cur="aboutpage">
				<view class="cuIcon-similar"></view> 关于
			</view> -->
			<view :class="PageCur=='postpage'?'action add-action text-orange':'action text-gray add-action'" @click="NavChange" data-cur="postpage">
				<button class="cu-btn cuIcon-add bg-orange shadow"></button>
				发布
			</view>
			<view :class="PageCur=='mypage'?'action text-orange':'action'" @click="NavChange" data-cur="mypage">
				<view class="cuIcon-my"></view> 我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'homepage'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
