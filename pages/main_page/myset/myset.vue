<template>
	<view>
		<cu-custom :bgColor="Defaulttheam.headcls" :isBack="true">
			<block slot="backText">返回1</block>
			<block slot="content">按钮</block>
		</cu-custom>
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>块状按钮
			</view>
		</view>
		<view class="padding flex flex-direction">
			<avatar selWidth="200rpx" selHeight="200rpx" @upload="myUpload" :avatarSrc="url" avatarStyle="width: 200rpx; height: 200rpx; border-radius: 100%;"></avatar>
		</view>
		<wmPoster imgSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" QrSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" Title="标题文本" PriceTxt="价格显示" OriginalTxt="划线价显示"></wmPoster>
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>
				按钮颜色
			</view>
			<view class="action">
				<text class="text-df margin-right-sm">阴影</text>
				<switch @change="SetShadow" :class="shadow ? 'checked' : ''" color="#39B54A"></switch>
			</view>
		</view>
		<view class="grid col-2 padding-sm">
			<view class="padding-sm" data-cls="bg-gradual-red" data-btncls="bg-red" data-textcls="text-red" @tap="SetTheam">
				<view class="bg-gradual-red padding radius text-center shadow-blur">
					<view class="text-lg">魅红</view>
					<view class="margin-top-sm text-Abc">#f43f3b - #ec008c</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-orange" data-btncls="bg-orange" data-textcls="text-orange" @tap="SetTheam">
				<view class="bg-gradual-orange padding radius text-center shadow-blur">
					<view class="text-lg">鎏金</view>
					<view class="margin-top-sm text-Abc">#ff9700 - #ed1c24</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-green" data-btncls="bg-green" data-textcls="text-green" @tap="SetTheam">
				<view class="bg-gradual-green padding radius text-center shadow-blur">
					<view class="text-lg">翠柳</view>
					<view class="margin-top-sm text-Abc">#39b54a - #8dc63f</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-blue" data-btncls="bg-cyan" data-textcls="text-cyan" @tap="SetTheam">
				<view class="bg-gradual-blue padding radius text-center shadow-blur">
					<view class="text-lg">靛青</view>
					<view class="margin-top-sm text-Abc">#0081ff - #1cbbb4</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-purple" data-btncls="bg-purple" data-textcls="text-purple" @tap="SetTheam">
				<view class="bg-gradual-purple padding radius text-center shadow-blur">
					<view class="text-lg">惑紫</view>
					<view class="margin-top-sm text-Abc">#9000ff - #5e00ff</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-pink" data-btncls="bg-mauve" data-textcls="text-mauve" @tap="SetTheam">
				<view class="bg-gradual-pink padding radius text-center shadow-blur">
					<view class="text-lg">霞彩</view>
					<view class="margin-top-sm text-Abc">#ec008c - #6739b6</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-gray" data-btncls="bg-gray" data-textcls="text-gray" @tap="SetTheam">
				<view class="bg-gradual-gray padding radius text-center shadow-blur">
					<view class="text-lg">烟灰</view>
					<view class="margin-top-sm text-Abc">#8799a3 - #333333</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-grey" data-btncls="bg-grey" data-textcls="text-grey" @tap="SetTheam">
				<view class="bg-gradual-grey padding radius text-center shadow-blur">
					<view class="text-lg">玄灰</view>
					<view class="margin-top-sm text-Abc">#8799a3 - #333333</view>
				</view>
			</view>
			<view class="padding-sm" data-cls="bg-gradual-black" data-btncls="bg-black" data-textcls="text-black" @tap="SetTheam">
				<view class="bg-gradual-black padding radius text-center shadow-blur">
					<view class="text-lg">水墨</view>
					<view class="margin-top-sm text-Abc">#333333 - #333333</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import avatar from '@/colorui/components/yq-avatar/yq-avatar.vue';
import wmPoster from '@/colorui/components/wm-poster/wm-poster.vue';
export default {
	components: { wmPoster,avatar },
	data() {
		return {
			shadow: false,
			url: '/static/default-skin/big10006.jpg',
			Defaulttheam:this.Defaulttheam
		};
	},
	methods: {
		myUpload(rsp) {
			this.url = rsp.path; //更新头像方式一
			//rsp.avatar.imgSrc = rsp.path; //更新头像方式二
		},
		SetShadow(e) {
			this.shadow = e.detail.value
		},
		SetTheam(e){
			console.log(e);
			this.Defaulttheam.headcls=e.currentTarget.dataset.cls;
			this.Defaulttheam.btncls=e.currentTarget.dataset.btncls;
			this.Defaulttheam.textcls=e.currentTarget.dataset.textcls;
			uni.setStorageSync("Defaulttheam",this.Defaulttheam);
		}
	},
	components: {
		avatar
	}
};
</script>

<style></style>
