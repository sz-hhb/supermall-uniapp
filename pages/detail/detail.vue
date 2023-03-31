<template>
	<view class="detail-wrapper">
		<detail-tab-bar @detail-tab-bar-click="detailTabBarClick"></detail-tab-bar>

		<scroll-view class="detail-scroll" scroll-y="true" :scroll-top="0">
			<detail-swiper :banner-list="topImages"></detail-swiper>
			<detail-base-info :base-info="{goodInfo,columnsList}"></detail-base-info>
			<detail-shop-info :shop-info="shopInfo"></detail-shop-info>
		</scroll-view>
	</view>
</template>

<script setup>
	import DetailTabBar from "./cpns/detail-tab-bar.vue"
	import DetailSwiper from "./cpns/detail-swiper.vue"
	import DetailBaseInfo from "./cpns/detail-base-info.vue"
	import DetailShopInfo from "./cpns/detail-shop-info.vue"
	import { onLoad } from "@dcloudio/uni-app"
	import { useDetailStore } from "@/store/detail.js"
	import { storeToRefs } from "pinia"
	import { computed } from "vue"

	const detailStore = useDetailStore()

	const { topImages, goodInfo, columnsList, shopInfo } = storeToRefs(detailStore)

	const props = defineProps({
		id: {
			type: String,
			default: ""
		}
	})

	onLoad(() => {
		detailStore.fetchDetailPageData(props.id);
	})


	const detailTabBarClick = (index) => {}
</script>

<style lang="scss">
	.detail-wrapper {
		height: 100%;
		overflow: auto;

		.detail-scroll {
			height: calc(100% - 100rpx);
		}
	}
</style>