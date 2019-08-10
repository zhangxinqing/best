<template>
		<view class="cu-item shadow"  v-if="options.title" @click="click">
			<view class="title"><view class="text-cut">{{options.title}}</view></view>
			<view class="content">
				<image :class="{'image-list2': options.article_type === 1 || options.article_type === 2}" v-if="options.image_url"
				 :src="options.image_url"></image>
				<image v-if="options.image_list" :src="source.url" v-for="(source, i) in options.image_list" :key="i" />
				<view v-if="!options.image_list" class="desc">
					<view class="text-content">{{options.title}}</view>
					<view>
						<view class="cu-tag bg-green light sm round">{{options.datetime}}</view>
						<view class="cu-tag bg-red light sm round">{{options.source}}</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			click() {
				this.$emit('click');
			},
			close(e) {
				this.$emit('close');
			}
		}
	}
</script>

