<template>
	<view>
		<homepage v-if="PageCur=='homepage'"></homepage>
		<aboutpage v-if="PageCur=='aboutpage'"></aboutpage>
		<view class="cu-bar tabbar bg-black shadow foot">
			<view :class="PageCur=='homepage'?'action text-orange':'action'" @click="NavChange" data-cur="homepage">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view :class="PageCur=='aboutpage'?'action text-orange':'action'" @click="NavChange" data-cur="aboutpage">
				<view class="cuIcon-similar"></view> 关于
			</view>
			<view :class="PageCur=='searchpage'?'action text-orange':'action'" @click="NavChange" data-cur="searchpage">
				<view class="cuIcon-search"></view> 搜索
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
