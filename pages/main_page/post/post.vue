<template>
	<view>
		<cu-custom :bgColor="Defaulttheam.headcls" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">我的</block>
		</cu-custom>

		<form>
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName != null" @input="textareaAInput" placeholder="你想说什么都行..."></textarea>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">图片上传</view>
				<view class="action">{{ imgList.length }}/4</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item, index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index"><text class="cuIcon-close"></text></view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length < 4"><text class="cuIcon-cameraadd"></text></view>
				</view>
			</view>
			<view class="cu-form-group" @tap="getRegeo">
				<text class='cuIcon-locationfill ' :class="Defaulttheam.textcls"></text>
				<input placeholder="输入框带个图标" v-if="geoadd" name="input" :value="geoadd.addresses"></input>
			</view>
			<view class="cu-form-group" @tap="chooseRegeo"  v-if="geoadd">
				{{geoadd.address.city}}{{geoadd.address.district}}{{geoadd.address.street}}{{geoadd.address.streetNum}}
			</view> 
			<view class="cu-form-group">
			</view>
			<view class="padding"><button @tap="toimage" class="cu-btn block margin-tb-sm lg" :class="Defaulttheam.btncls" type="">下一步</button></view>
			
		</form>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import utilajax from '@/util/utilajax.js';
export default {
	data() {
		return {
			gdmapContent:null,
			address: null,
			geoadd:null,
			Defaulttheam: this.Defaulttheam,
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
	onLoad() {
		this.getRegeo();
		
	},
	methods: {
		ChooseImage() {
			uni.chooseImage({
				count: 4, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: res => {
					if (this.imgList.length != 0) {
						this.imgList = this.imgList.concat(res.tempFilePaths);
					} else {
						this.imgList = res.tempFilePaths;
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
						this.imgList.splice(e.currentTarget.dataset.index, 1);
					}
				}
			});
		},
		textareaAInput(e) {
			this.textareaAValue = e.detail.value;
		},
		getRegeo() {
			let that = this;
			plus.geolocation.getCurrentPosition(function(res){
				that.address = JSON.stringify(res);
				that.geoadd=res;
				//that.gdmapContent=uni.createMapContext("gdmap",that);
				
				//that.gdmapContent.moveToLocation();
				
			});
		},
		chooseRegeo(){
			let that=this;
			uni.chooseLocation({
			    success: function (res) {
					that.geoadd.addresses=res.name;
			        console.log('位置名称：' + res.name);
			        console.log('详细地址：' + res.address);
			        console.log('纬度：' + res.latitude);
			        console.log('经度：' + res.longitude);
			    }
			});
		},
		toimage(){
			uni.navigateTo({
				url:'/pages/main_page/post/image'
			})
		}

	}
};
</script>

<style>
.cu-form-group .title {
	min-width: calc(4em + 15px);
}

.wrap::before {
	background: url('/static/default-skin/big25011.jpg') 0 / cover fixed;
}
.wrap {
	position: relative;
	margin: 0 auto;
	padding: 0em;
	width: 100%;
	height: 80rpx;
	background: hsla(0, 0%, 100%, 0.25) border-box;
	overflow: hidden;

	text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3);
}
.wrap::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: -30px;
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: blur(20px);
}
</style>
