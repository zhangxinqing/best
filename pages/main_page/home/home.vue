<template>
	<view>
		<cu-custom :bgColor="Defaulttheam.headcls" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">首页</block>
		</cu-custom>
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
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				宫格列表
			</view>
			<view class="action"><button class="cu-btn shadow" :class="Defaulttheam.btncls" @tap="showModal" data-target="gridModal">设置</button></view>
		</view>
		<view class="cu-modal" :class="modalName == 'gridModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<radio-group class="block" @change="Gridchange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item, index) in 3" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{ index + 3 }} 列</view>
								<radio class="round" :value="index + 3 + ''" :class="gridCol == index + 3 ? 'checked' : ''" :checked="gridCol == index + 3"></radio>
							</label>
						</view>
					</view>
				</radio-group>
				<view class="cu-list menu text-left solid-top">
					<view class="cu-item">
						<view class="content"><text class="text-grey">边框</text></view>
						<view class="action"><switch @change="Gridswitch" :class="gridBorder ? 'checked' : ''" :checked="gridBorder ? true : false"></switch></view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol, gridBorder ? '' : 'no-border']">
			<view class="cu-item" @tap="toHomelist" v-for="(item, index) in cuIconList" :key="index" v-if="index < gridCol * 2">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
					<view class="cu-tag badge" :class="Defaulttheam.btncls" v-if="item.badge != 0">
						<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view>
		<view @tap="tovideo" class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">钢铁之翼小视频</view>
				<view class="padding-xs text-lg">Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me. Only the guilty need fear me.</view>
			</view>
		</view>
		<view  @tap="tovideo2" class="cu-card article solid-bottom" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag light sm round" :class="Defaulttheam.btncls">正义天使</view>
							<view class="cu-tag light sm round"  :class="Defaulttheam.btncls">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article solid-bottom" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag light sm round" :class="Defaulttheam.btncls">正义天使</view>
							<view class="cu-tag light sm round"  :class="Defaulttheam.btncls">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article solid-bottom" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag light sm round" :class="Defaulttheam.btncls">正义天使</view>
							<view class="cu-tag light sm round"  :class="Defaulttheam.btncls">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article solid-bottom" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag light sm round" :class="Defaulttheam.btncls">正义天使</view>
							<view class="cu-tag light sm round"  :class="Defaulttheam.btncls">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article solid-bottom" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag light sm round" :class="Defaulttheam.btncls">正义天使</view>
							<view class="cu-tag light sm round"  :class="Defaulttheam.btncls">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="load-progress" :class="loadProgress != 0 ? 'show' : 'hide'" :style="[{ top: CustomBar + 'px' }]">
			<view class="load-progress-bar bg-green" :style="[{ transform: 'translate3d(-' + (100 - loadProgress) + '%, 0px, 0px)' }]"></view>
			<view class="load-progress-spinner text-green"></view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			Defaulttheam:this.Defaulttheam,
			isCard: true,
			loadProgress: 0,
			CustomBar: this.CustomBar,
			cardCur: 0,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			dotStyle: false,
			towerStart: 0,
			direction: '',
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}
			],
			modalName: null,
			gridCol: 5,
			gridBorder: false,
		};
	},
	methods: {
		IsCard(e) {
			this.isCard = e.detail.value;
		},
		DotStyle(e) {
			this.dotStyle = e.detail.value;
		},
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		// towerSwiper
		// 初始化towerSwiper
		TowerSwiper(name) {
			let list = this[name];
			for (let i = 0; i < list.length; i++) {
				list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
				list[i].mLeft = i - parseInt(list.length / 2);
			}
			this.swiperList = list;
		},

		// towerSwiper触摸开始
		TowerStart(e) {
			this.towerStart = e.touches[0].pageX;
		},

		// towerSwiper计算方向
		TowerMove(e) {
			this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
		},

		// towerSwiper计算滚动
		TowerEnd(e) {
			let direction = this.direction;
			let list = this.swiperList;
			if (direction == 'right') {
				let mLeft = list[0].mLeft;
				let zIndex = list[0].zIndex;
				for (let i = 1; i < this.swiperList.length; i++) {
					this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
					this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
				}
				this.swiperList[list.length - 1].mLeft = mLeft;
				this.swiperList[list.length - 1].zIndex = zIndex;
			} else {
				let mLeft = list[list.length - 1].mLeft;
				let zIndex = list[list.length - 1].zIndex;
				for (let i = this.swiperList.length - 1; i > 0; i--) {
					this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
					this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
				}
				this.swiperList[0].mLeft = mLeft;
				this.swiperList[0].zIndex = zIndex;
			}
			this.direction = '';
			this.swiperList = this.swiperList;
		},
		LoadProgress() {
			this.loadProgress = this.loadProgress + 3;
			if (this.loadProgress < 100) {
				setTimeout(() => {
					this.LoadProgress();
				}, 100);
			} else {
				this.loadProgress = 0;
			}
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		Gridchange(e) {
			this.gridCol = e.detail.value;
		},
		toHomelist(e){
			uni.navigateTo({
				url: '/pages/main_page/homelist/homelist',
				animationType: 'pop-in',
				animationDuration: 200
			});
		},
		toHomelist2(e){
			uni.navigateTo({
				url: '/pages/main_page/homelist/homelist',
				animationType: 'pop-in',
				animationDuration: 200
			});
		},
		tovideo(e){
			uni.navigateTo({
				url: '/pages/main_page/video/index',
				animationType: 'pop-in',
				animationDuration: 200
			});
		},
		tovideo2(e){
			
			uni.navigateTo({
			    url: '/pages/main_page/homelist/detail/detail?title=凡真正的恩典因不完整而美丽'
			});
		}
	},
	onLoad() {
		console.log('页面加载事件');
		this.LoadProgress();
		this.TowerSwiper('swiperList');
		// 初始化towerSwiper 传已有的数组名即可
	}
};
</script>

<style></style>
