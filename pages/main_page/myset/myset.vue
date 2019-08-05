<template>
	<view>
		<cu-custom bgColor="bg-gradual-gray" :isBack="true">
			<block slot="backText">返回1</block>
			<block slot="content">按钮</block>
		</cu-custom>
		<view class="cu-bar margin-top bg-white">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>块状按钮
			</view>
		</view>
		<view class="padding flex flex-direction">
			<avatar selWidth="200px" selHeight="400upx" @upload="myUpload" :avatarSrc="url" avatarStyle="width: 200upx; height: 200upx; border-radius: 100%;"></avatar>
			
		</view>
		<!-- <wm-poster imgSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" QrSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" Title="标题文本" PriceTxt="价格显示" OriginalTxt="划线价显示"></wm-poster> -->
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
			<view class="padding-sm">
				<view class="bg-gradual-red padding radius text-center shadow-blur">
					<view class="text-lg">魅红</view>
					<view class="margin-top-sm text-Abc">#f43f3b - #ec008c</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-orange padding radius text-center shadow-blur">
					<view class="text-lg">鎏金</view>
					<view class="margin-top-sm text-Abc">#ff9700 - #ed1c24</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-green padding radius text-center shadow-blur">
					<view class="text-lg">翠柳</view>
					<view class="margin-top-sm text-Abc">#39b54a - #8dc63f</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-blue padding radius text-center shadow-blur">
					<view class="text-lg">靛青</view>
					<view class="margin-top-sm text-Abc">#0081ff - #1cbbb4</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-purple padding radius text-center shadow-blur">
					<view class="text-lg">惑紫</view>
					<view class="margin-top-sm text-Abc">#9000ff - #5e00ff</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-pink padding radius text-center shadow-blur">
					<view class="text-lg">霞彩</view>
					<view class="margin-top-sm text-Abc">#ec008c - #6739b6</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-gray padding radius text-center shadow-blur">
					<view class="text-lg">烟灰</view>
					<view class="margin-top-sm text-Abc">#8799a3 - #333333</view>
				</view>
			</view>
			<view class="padding-sm">
				<view class="bg-gradual-grey padding radius text-center shadow-blur">
					<view class="text-lg">玄灰</view>
					<view class="margin-top-sm text-Abc">#8799a3 - #333333</view>
				</view>
			</view>
			<view class="padding-sm">
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
	components: { wmPoster },
	data() {
		return {
			shadow: false,
			url: '../../../static/logo.png'
		};
	},
	methods: {
		myUpload(rsp) {
			this.url = rsp.path; //更新头像方式一
			//rsp.avatar.imgSrc = rsp.path; //更新头像方式二
		},
		SetShadow(e) {
			this.shadow = e.detail.value
		}
	},
	components: {
		avatar
	}
};
</script>

<style></style>
