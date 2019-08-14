<template>
	
	<!-- conClick为点击反馈事件 其他touch为下拉刷新事件 -->
	<view class="pagecontent" @click="conClick" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd">
		<cu-custom :bgColor="Defaulttheam.headcls" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">热点推荐20</block>
		</cu-custom>
		<!-- 点击反馈组件 -->
		
		<!-- 下拉刷新组件 传入刷新事件 -->
		<refresh ref="refresh" :isRefresh="isRefresh"></refresh>
		<view class='bg-gradual-orange'>
			
			<navTab ref="navTab" :tabBars="tabBars"></navTab>
		</view>
		
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="min-height: 100vh;" :duration="400" :current="currentTab" @change="swiperTab" @touchstart="touchStart"
		 @touchend="toucheEnd">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="loadMore">
					<view style="width: 100%;height: 80upx;"></view>
					<view class='content'>
						<view v-for="(item,index) in listItem" v-if="listItem.length > 0 && index<listIndex+1" :key="index">
							<!-- {{item}} -->
							<mediaList :options="item" @close="close(listItem,index)" @click="goDetail(item,index)"></mediaList>
						</view>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	var startX = 0
	// 引入下拉刷新和点击反馈组件
	import refresh from "@/colorui/components/refresh.vue"
	import navTab from "@/colorui/components/navTab.vue"
	import uniIcon from "@/colorui/components/uni-icon/uni-icon.vue"
	import mediaList from '@/colorui/components/medialist/mediaList.vue';
	var listData = [{
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
			"source": "DCloud",
			"comment_count": 639,
			videoSrc: true
		},
		{
			"datetime": "一天前",
			"article_type": 1,
			"title": "DCloud完成B2轮融资，uni-app震撼发布!",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 11395,
			videoSrc: false
		},
		{
			"datetime": "一天前",
			"article_type": 2,
			"title": "中国技术界小奇迹：HBuilder开发者突破200万",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 11395,
			videoSrc: false
		},
		{
			"article_type": 3,
			"image_list": [{
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 563,
				"height": 316
			}, {
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 641,
				"height": 360
			}, {
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 640,
				"height": 360
			}],
			"datetime": "5分钟前",
			"title": "uni-app 支持使用 npm 安装第三方包，生态更趋丰富",
			"source": "DCloud",
			"comment_count": 11,
			videoSrc: true
		},
		{
			"datetime": "2小时前",
			"article_type": 4,
			"title": "uni-app 支持原生小程序自定义组件，更开放、更自由",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 69,
			videoSrc: false
		}
	];
	export default {
		components: {
			refresh,
			navTab,
			uniIcon,
			mediaList
		},
		data() {
			return {
				Defaulttheam:this.Defaulttheam,
				headerPosition: 'fixed',
				currentTab: 0, //sweiper所在页
				headerTop: null,
				statusTop: null,
				pages: [], //第几页存储 
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}, {
					name: '军事',
					id: 'junshi'
				}, {
					name: '历史',
					id: 'lishi'
				}, {
					name: '本地',
					id: 'bendi'
				}],
				list: [
					listData,
					listData,
					listData,
					listData,
					listData,
					listData,
					listData,
					listData,
					listData
				] //数据格式
			}
		},
		mounted() {

		},
		onLoad() {
			for (let j = 1; j <= this.tabBars.length; j++) {
				this.pages.push(1);
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		methods: {
			touchStart(e) {
				console.log(e)
				if (this.currentTab == 0) {
					startX = e.changedTouches[0].pageX
				}
			},
			toucheEnd(e) {
				console.log(e)
				if (e.changedTouches[0].pageX - startX > 120 && this.currentTab == 0) {
					uni.switchTab({
						url: '../index/index'
					})
				}
			},
			// 点击反馈事件
			conClick(e) {
				//this.$refs.circle.conClick(e);
				//#ifdef H5 || MP-WEIXIN
				this.currentTab=e.target.dataset.index;
				//#endif
			},
			// 下拉刷新事件 
			refreshStart(e) {
				this.$refs.refresh.refreshStart(e);
			},
			refreshMove(e) {
				this.$refs.refresh.refreshMove(e);
			},
			refreshEnd(e) {
				this.$refs.refresh.refreshEnd(e);
			},
			// 此处为刷新请求
			isRefresh() {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						uni.showToast({
							icon: 'success',
							title: '刷新成功'
						})
						resolve()
					}, 1000)
				})
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest(pages) {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					setTimeout(() => {
						uni.hideLoading()
						let newData = listData;
						resolve(newData)
					}, 1000)
				})
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				if (this.tabBars.length <= 5) {
					this.$refs.navTab.navClick(index)
				} else {
					this.$refs.navTab.longClick(index)
				}
			},
			// 加载更多
			loadMore() {
				console.log(`加载${this.currentTab}`) //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
				uni.showLoading({
					content: '加载中',
					mask: true
				})
				let self = this;
				this.isRequest().then((res) => {
					let tempList = this.list;
					tempList[this.currentTab] = tempList[this.currentTab].concat(res)
					console.log(tempList)
					this.list = tempList
					this.$forceUpdate() //二维数组，开启强制渲染
				})
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: (res) => {
						if (res.confirm) {
							let tempList = this.list;
							for (let j = 1; j <= tempList[this.currentTab].length; j++) {
								tempList[this.currentTab].splice(index2, 1)
							}
						}
					}
				})
			},
			//新闻详情
			goDetail(item, index) {
				
			},
		}
	}
</script>

<style lang="scss">
	
</style>

