<template>
	<view style="position: absolute;top: 0;bottom: 0;">
		<view class="video-view">
			<video
				class="video"
				:class="changecls"
				id="video"
				:data-id="index"
				autoplay="true"
				:src="playvideo.src"
				controls
				@tapVideo="videoPlay(index)"
				@touchstart="ListTouchStart"
				@touchmove="ListTouchMove"
				@touchend="ListTouchEnd"
			>
				<cover-view class="controls-box"></cover-view>
				<cover-image class="controls-box-left" :src="playvideo.picture"></cover-image>
				<cover-view class="controls-box-left-pf">京东</cover-view>
				<cover-view class="controls-box-left-title">{{ scrollTop }}-{{ index }}-{{ playvideo.title }}</cover-view>
				<cover-view class="controls-box-right"></cover-view>
				<cover-image class="controls-share" @tap="tapShare" src="http://www.91jdj.cn/attachment/images/69/2019/08/p9fwD74jk4nX9kqxTd4xZjJo6Jf649.png"></cover-image>
			</video>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			changecls:'',
			scrollTop: 0,
			videoCtx: null,
			listTouchStartY: 0,
			listTouchPageY: 0,
			index: 0,
			playvideo: {
				title: '无意者 烈火焚身;以正义的烈火拔出黑暗',
				src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
				content: '123',
				flag: false,
				check: true,
				avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
				picture: 'https://img.91fyt.com/19e10ca607680d2242e595c82b9bb65de03f17788c09382dgtBC1Sddr7.jpg'
			},
			videoList: [
				{
					title: '无意者 烈火焚身;以正义的烈火拔出黑暗',
					src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
					content: '456',
					flag: false,
					check: false,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'https://img.91fyt.com/6e2abf172ce3fec4e68692fe7226795763ed75d12d1b9693LC0cSSJZ03.jpg'
				},
				{
					title: '真正的恩典因不完整而美丽',
					src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
					content: '123',
					flag: false,
					check: true,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'https://img.91fyt.com/547ff08d95da80c5f49f8c3a5b2a09973e7bed49f826aa46xkStV5YMGU.jpg'
				},
				{
					title: '折磨生出苦难，苦难又会加剧折磨',
					src: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
					content: '789',
					flag: false,
					check: false,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'https://img.91fyt.com/c32032f671ba5830bad8fa3a689168180ed7f2341bf14be2BlT3YgRHhN.jpg'
				},
				{
					title: '真正的恩典因不完整而美丽',
					src:
						'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
					content: '456',
					flag: false,
					check: false,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'http://img14.360buyimg.com/ads/jfs/t1/45162/29/4764/626138/5d270e59E278729f2/668f420b2fcbadb1.png'
				},
				{
					title: '折磨生出苦难，苦难又会加剧折磨',
					src: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
					content: '123',
					flag: false,
					check: true,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'https://img.91fyt.com/f087a84bafe488cd4f76341804d4f8a29df77a0323143c90Jpp1YGbNP2.jpg'
				},
				{
					title: '无意者 烈火焚身;以正义的烈火拔出黑暗',
					src: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
					content: '789',
					flag: false,
					check: false,
					avater: 'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg',
					picture: 'http://img.haojingke.com/740c1c8ab1a7eadd43bd993e49f09f556d5649bb137f57073xm0nBI4ri.jpg'
				}
			]
		};
	},
	onLoad(event) {
		uni.setNavigationBarTitle({
			title: '视频播放'
		});
	},
	onPageScroll(e) {
		//兼容ios用
		console.log(JSON.stringify(e));
		if (this.scrollTop == 0) {
			if (e.scrollTop > 0) {
				this.index++;
				console.log('下一个视频' + this.index);
				if (this.index > this.videoList.length - 1) {
					this.index = 0;
				}
				this.scrollTop = e.scrollTop;
			}
			if (e.scrollTop < 0) {
				this.scrollTop = e.scrollTop;
				this.index--;
				console.log('上一个视频' + this.index);
				if (this.index < 0) {
					this.index = this.videoList.length - 1;
				}
				this.scrollTop = e.scrollTop;
			}
		}
		if (e.scrollTop == 0) {
			this.scrollTop = 0;
			this.playvideo = this.videoList[this.index];
			console.log('播放视频' + this.index);
			this.videoCtx = uni.createVideoContext('video');
			this.videoCtx.play();
		}
	},
	async mounted() {},
	methods: {
		tapShare() {
			uni.showToast({
				icon: 'none',
				title: `分享索引为${this.index}的视频`
			});
			return false;
		},
		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStartY = e.touches[0].pageY;
		},
		// ListTouch计算方向
		ListTouchMove(e) {
			console.log('移动开始位置：' + this.listTouchStartY);
			console.log('移动位置：' + e.touches[0].pageY);
			this.listTouchPageY = e.touches[0].pageY;
			this.changecls="changecls";
		},
		// ListTouch计算滚动
		async ListTouchEnd(e) {
			const id = this.id;
			let isup = 1;
			console.log(this.listTouchStartY);
			if(this.listTouchPageY==0){
				return;
			}
			if (this.listTouchStartY < this.listTouchPageY) {
				isup = 1;
				this.index++;
				console.log('向上翻视频');
				if (this.index == this.videoList.length) {
					this.index = 0;
				}
			}
			if (this.listTouchStartY > this.listTouchPageY) {
				isup = -1;
				console.log('向下翻视频');
				this.index--;
				if (this.index < 0) {
					this.index = this.videoList.length - 1;
				}
			}
			this.changecls="";
			this.listTouchPageY=0;
			this.playvideo = this.videoList[this.index];
			this.videoCtx = uni.createVideoContext(`video`);
			this.videoCtx.play();
		},
		videoPlay(id) {
			if (!this.videoList[id].flag) {
				this.videoCtx = uni.createVideoContext(`video`);
				this.videoCtx.play();
			} else {
				this.videoCtx = uni.createVideoContext(`video`);
				this.videoCtx.pause();
			}
			this.videoList[id].flag = !this.videoList[id].flag;
		}
	}
};
</script>
<style lang="scss" scoped>
.controls-box {
	background: #ffffff;
	position: absolute;
	width: 650rpx;
	height: 200rpx;
	bottom: 90upx;
	left: 50rpx;
	border-radius: 10rpx;
}
.controls-box-right {
	background: #fbbd08;
	position: absolute;
	width: 100rpx;
	height: 200rpx;
	right: 50rpx;
	bottom: 90upx;
	border-top-right-radius: 10rpx;
	border-bottom-right-radius: 10rpx;
}
.controls-box-left {
	position: absolute;
	width: 200rpx;
	height: 200rpx;
	left: 50rpx;
	bottom: 90upx;
	border-radius: 10rpx;
}
.controls-box-left-pf {
	position: absolute;
	width: 50rpx;
	left: 255rpx;
	bottom: 250upx;
	font-size: 24rpx;
	padding-left: 8rpx;
	border-radius: 10rpx;
	color: #ffffff;
	background-color: #5e00ff;
}
.controls-box-left-title {
	position: absolute;
	width: 270rpx;
	left: 320rpx;
	bottom: 250upx;
	font-size: 24rpx;
}
.controls-share {
	right: 50rpx;
	width: 50rpx;
	height: 50rpx;
	top: 10%;
	position: absolute;
}
.video-view {
	position: fixed;
}

.video {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0rpx;
	bottom: 0rpx;
	display: block;
}
.imgAnimation{

      animation-name: imgAnimation;

      animation: imgAnimation 2s alternate infinite;

      -webkit-animation: imgAnimation 2s alternate ;

      -moz-animation: imgAnimation 2s alternate ;

 }
@-webkit-keyframes imgAnimation{

    0%{ top: 0%}

    100%{ top: -150%;}

 }
@-moz-keyframes imgAnimation{

    0%{ top: 0%}

    100%{ top: -150%;}

 }

</style>
