<template>
    <view class="page">
        <video class="video" :style="contentstyle" id="demoVideo" autoplay="true" loop="true" :controls="disable" :show-fullscreen-btn="disable" :show-play-btn="disable"
         :show-center-play-btn="disable" :enable-progress-gesture="disable" @fullscreenchange="fullscreenchange" src="https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4">
            <cover-view class="controls-title">{{title}}</cover-view>
			<cover-view class="controls-price">来源DCloud官方 作者丁小白</cover-view>
            <cover-image class="controls-play img" @click="play" src="/static/goods_bag.png"></cover-image>
            <cover-image class="controls-pause img" @click="buy" src="/static/goods_buy.png"></cover-image>
			<cover-image class="img controls-share" @click="pause" src="/static/goods_share.png"></cover-image>
        </video>
    </view>
</template>
<script>
export default {
        data() {
            return {
				title:'',
				contentstyle:{height:'',width:''},
                videoCtx: null,
                disable: false
            }
        },
        mounted() {
            this.videoCtx = uni.createVideoContext('demoVideo')
        },
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			this.title=event.title?event.title:"";
			uni.setNavigationBarTitle({
				title: this.title
			});
		},
		onReady() {
			try {
			    const res = uni.getSystemInfoSync();
			    console.log(res.model);
			    console.log(res.pixelRatio);
			    console.log(res.windowWidth);
			    console.log(res.windowHeight);
			    console.log(res.language);
			    console.log(res.version);
			    console.log(res.platform);
				this.contentstyle.height=res.windowHeight+"px";
				this.contentstyle.width=res.windowWidth+"px";
			} catch (e) {
			    // error
			}
		},
        methods: {
            play(event) {
                this.videoCtx.play();
                uni.showToast({
                    title: '开始播放',
                    icon: 'none'
                });
            },
            pause(event) {
                this.videoCtx.pause();
                uni.showToast({
                    title: '暂停播放',
                    icon: 'none'
                });
            },
			buy(event) {
			    this.videoCtx.pause();
			    uni.showToast({
			        title: '你在点我',
			        icon: 'none'
			    });
			}
        }
    }
</script>
<style>
 .page {
        display: flex;
        justify-content: center;
    }

    .video {
        position: relative;
    }

    cover-view,
    cover-image {
        display: inline-block;
    }

    .img {
        position: absolute;
        width: 100rpx;
        height: 100rpx;
        top: 90%;
        margin-top: -50rpx;
    }

    .controls-play {
        left: 50rpx;
    }

    .controls-pause {
        right: 50rpx;
    }
	.controls-share {
	    right: 50rpx;
		width: 50rpx;
		height: 50rpx;
		top: 10%;
	}

    .controls-title {
		position: absolute;
        width: 100%;
		top: 88%;
        text-align: left;
		left: 150rpx;
        color: #FFFFFF;
    }
	.controls-price {
		position: absolute;
	    width: 100%;
		top: 91%;
	    text-align: left;
		left: 150rpx;
	    color: #FFFFFF;
	}
</style>
