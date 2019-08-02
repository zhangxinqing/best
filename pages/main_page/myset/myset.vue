<template>
	<view>
		<avatar 
        selWidth="200px" selHeight="400upx" @upload="myUpload" :avatarSrc="url"
        avatarStyle="width: 200upx; height: 200upx; border-radius: 100%;">
    </avatar>
	
	<wm-poster imgSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" QrSrc="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" Title="标题文本" PriceTxt="价格显示" OriginalTxt="划线价显示"></wm-poster>
	</view>
</template>

<script>
	import avatar from "@/colorui/components/yq-avatar/yq-avatar.vue";
	import wmPoster from "@/colorui/components/wm-poster/wm-poster.vue"
    export default {
		components: {wmPoster},
        data() {
            return {
                url: "../../../static/logo.png",
				
            }
        },
        methods: {
            myUpload(rsp) {
                this.url = rsp.path; //更新头像方式一
                //rsp.avatar.imgSrc = rsp.path; //更新头像方式二
            }
        },
        components: {
            avatar
        }
    }
</script>

<style>

</style>
