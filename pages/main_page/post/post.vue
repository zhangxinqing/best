<template>
	<view>
		
		<view class="wrap">
		
		</view>
		<swiper
		class="card-swiper"
			:class="dotStyle ? 'square-dot' : 'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="true"
			interval="5000"
			duration="500"
			@change="cardSwiper"
			indicator-color="#8799a3"
			indicator-active-color="#0081ff"
		>
			<swiper-item @tap="toHomelist2" v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<form>
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="多行文本输入框"></textarea>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="padding">
				<button class="cu-btn block margin-tb-sm lg" :class="Defaulttheam.btncls" type="">提交</button>
			</view>
			
			
		</form>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Defaulttheam:this.Defaulttheam,
				imgList: [],
				modalName: null,
				textareaAValue: '',
				swiperList: [
					{
						id: 0,
						type: 'image',
						url: '/static/default-skin/big84000.jpg'
					},
					{
						id: 1,
						type: 'image',
						url: '/static/default-skin/big37006.jpg'
					},
					{
						id: 2,
						type: 'image',
						url: '/static/default-skin/big39000.jpg'
					},
					{
						id: 3,
						type: 'image',
						url: '/static/default-skin/big10001.jpg'
					},
					{
						id: 4,
						type: 'image',
						url: '/static/default-skin/big25011.jpg'
					},
					{
						id: 5,
						type: 'image',
						url: '/static/default-skin/big21016.jpg'
					},
					{
						id: 6,
						type: 'image',
						url: '/static/default-skin/big99008.jpg'
					}
				]
			};
		},
		methods: {
			
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera','album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	
	.wrap::before {
		background:url("/static/default-skin/big25011.jpg") 0 / cover fixed;
	}
	.wrap {
		position:relative;
		margin:0 auto;
		padding:0em;
		width: 100%;
		height: 80rpx;
		background:hsla(0,0%,100%,.25) border-box;
		overflow:hidden;
		
		text-shadow:0 1px 1px hsla(0,0%,100%,.3);
	}
	.wrap::before {
		content:'';
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:-30px;
		z-index:-1;
		-webkit-filter:blur(20px);
		filter:blur(20px);
	}
</style>
