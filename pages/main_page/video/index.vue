<template>
    <view class="page">
		
		<view class="video-view" :style="containerStyle">
			<video class="video" :id="`video_${index}`" :key="index" :data-id = "index"
				:src="item.src" controls v-for="(item,index) in videoList"
				@tapVideo="videoPlay(index)"
				@touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd">
				<cover-view class="controls-title">{{title}}</cover-view>
				<cover-view class="controls-price">来源 作者丁小白推荐</cover-view>
				<cover-image class="controls-play img" @click="play" src="https://www.91jdj.cn/addons/nets_haojk//skin/shui.jpg"></cover-image>
				<cover-image class="avater img" @tap.stop="tapAvater" :src="item.avater"></cover-image>
				<cover-image class="aixin img" @tap.stop="tapLove" src="http://www.91jdj.cn/attachment/images/69/2019/08/uSUKnTofUn0SfuwRn3SgO4WtTso3R3.png"></cover-image>
				<cover-image class="xiaoxi img" @tap.stop="tapMsg" src="http://www.91jdj.cn/attachment/images/69/2019/08/QKyhcbbxYcuYHhKHbCb3sc3HZQIuYc.png"></cover-image>
				<cover-image class="controls-share" @tap.stop="tapShare" src="http://www.91jdj.cn/attachment/images/69/2019/08/p9fwD74jk4nX9kqxTd4xZjJo6Jf649.png"></cover-image>
			</video>
		</view>
    </view>
</template>
<script>

    export default {
        data() {
            return {
				title:'无意者 烈火焚身;以正义的烈火拔出黑暗',
                videoCtx: null,
				listTouchStartY: 0,
				listTouchDirection: null,
				containerStyle:'',
				sysheight:0,
				distance:0,
				scroll:false,
				id:0,
				videoList:[
					{
						src:'https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4',
						content:'456',
						flag:false,
						check:false,
						avater:'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg'
					},
					{
						src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167057&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
						content:'123',
						flag:false,
						check:true,
						avater:'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg'
					},
					{
						src:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=167805&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
						content:'789',
						flag:false,
						check:false,
						avater:'https://www.91jdj.cn/addons/nets_haojk//skin/logo.jpg'
					},
				],
			}
        },
		onLoad(event){
			this.sysheight = uni.getSystemInfoSync().windowHeight;
			this.title=event.title?event.title:"无意者 烈火焚身;以正义的烈火拔出黑暗";
			uni.setNavigationBarTitle({
				title: this.title
			});
		},
        async mounted() {
			//#ifdef APP-PLUS
			const subNVue = uni.getSubNVueById('concat')  
			// 打开 nvue 子窗体  
			subNVue.show('slide-in-left', 100, ()=>{  
				uni.$on('ListTouchStart', (e)=>{
					this.listTouchStartY = e.changedTouches[0].pageY
				})
				uni.$on('ListTouchMove', (e)=>{
					this.ListTouchMoveY(e.changedTouches[0].pageY)
				})
				uni.$on('ListTouchEnd', ()=>{
					this.ListTouchEnd()
				})
				uni.$on('tapLove', ()=>{
					if(this.scroll) return
					this.tapLove()
				})
				uni.$on('tapMsg', ()=>{
					if(this.scroll) return
					this.tapMsg()
				})
				uni.$on('tapShare', ()=>{
					if(this.scroll) return
					this.tapShare()
				})
				uni.$on('tapCover', ()=>{
					if(this.scroll) return
					this.videoPlay(this.id)
				})
				uni.$on('tapAvater', ()=>{
					if(this.scroll) return
					this.tapAvater()
				})
			});  
			//#endif
        },
        methods: {
			pushVideoList(){
				let promise = new Promise((resolve,reject)=>{
					uni.request({
						url: 'https://api.apiopen.top/videoRecommend?id=127397',
						success: (res) => {
							let videoGroup = []
							for (let item of res.data.result) {
								//限制3条
								if(item.type == 'videoSmallCard'&&videoGroup.length<3){
									videoGroup.push({
										src:item.data.playUrl,
										content:item.data.description,
										flag:false,
										check:false,
										avater:item.data.author.icon
									})
								}
							}
							this.videoList = [...this.videoList,...videoGroup]
							resolve()
						}
					})
				}) 
				return promise
			},
			tapLove(){
				this.videoList[this.id].check = !this.videoList[this.id].check
				this.videoList = [...this.videoList]
			},
			tapAvater(){
				uni.showToast({
					icon:'none',
					title:`点击索引为${this.id}的头像`
				})
			},
			tapMsg(){
				uni.showToast({
					icon:'none',
					title:`查看索引为${this.id}的评论`
				})
			},
			tapShare(){
				uni.showToast({
					icon:'none',
					title:`分享索引为${this.id}的视频`
				})
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStartY = e.touches[0].pageY
				
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				this.ListTouchMoveY(e.touches[0].pageY)
			},
			ListTouchMoveY(Y){
				//该视频向上
				this.listTouchDirection = this.listTouchStartY - Y > 80 ? -1 : 0
				//该视频向下
				this.listTouchDirection = Y - this.listTouchStartY > 80 ?  1 : this.listTouchDirection
				const distance = this.distance + Y - this.listTouchStartY
				if(distance>0) return
				this.containerStyle = `transform:translate3d(0, ${distance}px, 0)`
				if(this.listTouchStartY - Y<10&&this.listTouchStartY-Y>-10){
					this.listTouchDirection = null
				}
			},
			// ListTouch计算滚动
			async ListTouchEnd(e) {
				if(this.scroll) return
				const id = this.id
				if(id == this.videoList.length-2){
					this.pushVideoList()
				}
				//点击事件
				if(!this.listTouchDirection&&this.listTouchDirection!=0){
					return
				}
				const destination = this.listTouchDirection*this.sysheight+this.distance
				//不允许滚动出列表
				if(destination>0||destination<-this.sysheight*(this.videoList.length-1)) return
				this.videoCtx = uni.createVideoContext(`video_${id}`);
				this.videoList[id].flag = !this.videoList[id].flag
				this.videoCtx.pause();
				//开始滚动
				await this.animate(destination, this.listTouchDirection)
				this.videoCtx = uni.createVideoContext(`video_${id-this.listTouchDirection}`);
				this.videoList[id-this.listTouchDirection].flag = !this.videoList[id-this.listTouchDirection].flag
				this.videoCtx.play();
				this.id = this.id-this.listTouchDirection
				this.listTouchDirection = null
			},
			videoPlay(id){
				if(!this.videoList[id].flag){
					this.videoCtx = uni.createVideoContext(`video_${id}`);
					this.videoCtx.play();
				}else{
					this.videoCtx = uni.createVideoContext(`video_${id}`);
					this.videoCtx.pause();
				}
				this.videoList[id].flag = !this.videoList[id].flag
			},
			animate(des, direc) {
				let { distance } = this
				let promise = new Promise((resolve,reject)=>{
					this.scroll = true
					const temp = setInterval(() => {
						if ((direc === -1 && des < distance) || (direc === 1 && des > distance)) {
							distance += 50 * direc
							this.containerStyle = `transform:translate3d(0, ${distance}px, 0)`
						} else {
							clearInterval(temp)
							distance = des
							this.distance = des
							this.containerStyle = `transform:translate3d(0, ${distance}px, 0)`
							this.scroll = false
							resolve()
						}
					}, 50)
				})
				return promise
			}
        },
		


    }
</script>
<style lang="scss" scoped>
	.controls-play {
		position: absolute;
		bottom: 90upx;
	    left: 50rpx;
	}
	.controls-share {
	    right: 50rpx;
		width: 50rpx;
		height: 50rpx;
		top: 10%;
		position: absolute;
	}
    .video {
    	width: 100%;
    	height: 100vh;
		position: relative;
		display: block;
    }
	.cover-view-left{
		position: absolute;
		margin-left: 10upx;
		width: 80%;
		color: #FFFFFF;
		bottom: 100upx;
		font-size: 14px;
		.left-content{
			width: 100%;
			white-space: pre-wrap;  
			text-overflow:ellipsis;
			overflow:hidden;
		}
		input{
			height: 50upx;
			border: 1px solid #FFFFFF;
			padding-left: 10upx;
			width: 400upx;
		}
	}
	.avater{
		position: absolute;
		bottom: 340upx;
		right: 0;
		margin-right: 10upx;
		border-radius: 40upx;
		height: 80upx;
		width: 80upx;
	}
	.aixin{
		position: absolute;
		bottom: 260upx;
		right: 0;
		margin-right: 10upx;
	}
	.xiaoxi{
		position: absolute;
		bottom: 180upx;
		right: 0;
		margin-right: 10upx;
	}
	.share{
		position: absolute;
		bottom: 100upx;
		right: 0;
		margin-right: 10upx;
	}
	.img{
		height: 80upx;
		width: 80upx;
	}
	.page{
		height: 100vh;
		overflow: hidden;
		
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