<template>
	<view>
		<cu-custom bgColor="bg-gradual-orange" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">我的</block>
		</cu-custom>
		<view class="cu-card case" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="image">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="widthFix"></image>
					<view class="cu-tag bg-blue">史诗</view>
					<view class="cu-bar bg-shadeBottom"> 
					<text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text>
					<text class="lg text-gray cuIcon-qrcode"></text>
					<text class="lg text-gray cuIcon-right" @tap="myset"></text>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-grey">正义天使 凯尔</view>
							<view class="text-gray text-sm flex justify-between">
								十天前
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
							</view>
						</view>
					</view>
				</view>
				<scroll-view scroll-x class="bg-gradual-orange nav text-center">
					<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap="tabSelect" data-id="0">
						<text class="cuIcon-camerafill"></text> 数码
					</view>
					<view class="cu-item" :class="1==TabCur?'text-white cur':''" @tap="tabSelect" data-id="1">
						<text class="cuIcon-upstagefill"></text> 排行榜
					</view>
					<view class="cu-item" :class="2==TabCur?'text-white cur':''" @tap="tabSelect" data-id="2">
						<text class="cuIcon-clothesfill"></text> 皮肤
					</view>
				</scroll-view>
				<view class="cu-list menu-avatar comment ">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
						<view class="content">
							<view class="text-grey">莫甘娜</view>
							<view class="text-gray text-content text-df">
								凯尔，你被自己的光芒变的盲目。
								凯尔，你被自己的光芒变的盲目。
								凯尔，你被自己的光芒变的盲目。
							</view>
							<view class="flex justify-between align-center">
								<view class='cu-avatar xl radius'>
									港
									<view class="cu-tag badge">99+</view>
								</view>
								<view class='cu-avatar xl radius' style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
									<view class='cu-tag badge'>9</view>
								</view>
								<view class='cu-avatar xl radius'>
									<view class='cu-tag badge'>99</view>
									<text class='cuIcon-people'></text>
								</view>
								<view class='cu-avatar xl radius'>
									<view class='cu-tag badge'>99+</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciatefill text-red margin-lr-xs">22</text>
								</view>
							</view>
						</view>
					</view>
				
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">凯尔</view>
							<view class="text-gray text-content text-df">
								妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
							</view>
							
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-appreciate text-gray">0</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: true,
				TabCur: 0,
				animation:'',
				list: [{
						name: 'fade',
						color: 'red'
					},
					{
						name: 'scale-up',
						color: 'orange'
					},
					{
						name: 'scale-down',
						color: 'olive'
					},
					{
						name: 'slide-top',
						color: 'green'
					}, {
						name: 'slide-bottom',
						color: 'cyan'
					},
					{
						name: 'slide-left',
						color: 'blue'
					},
					{
						name: 'slide-right',
						color: 'purple'
					},
					{
						name: 'shake',
						color: 'mauve'
					}
				],
				toggleDelay: false

			};
		},
		methods: {
			Toggle(e) {
				var anmiaton = e.currentTarget.dataset.class;
				this.animation= anmiaton;
				setTimeout(()=>{
					this.animation= '';
				}, 1000)
			},
			ToggleDelay() {
				this.toggleDelay= true;
				setTimeout(()=>{
					this.toggleDelay= false
				}, 1000)
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			myset(e){
				
			}
		},
	}
</script>

<style>
	@import "../../../colorui/animation.css";
	
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}
	
	.user-avatar{
		position: absolute;
		top: 15px;
		width: 66px;
		left: 3px;
		height: 66px;
	}
</style>