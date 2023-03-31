<template>
	<view class="detail-wrapper">
		<detail-tab-bar @detail-tab-bar-click="detailTabBarClick"></detail-tab-bar>


		<scroll-view class="detail-scroll" scroll-y="true" :scroll-top="0">
			<template v-if="currentDetailPageIndex === 0">
				<detail-swiper :banner-list="topImages"></detail-swiper>
				<detail-base-info :base-info="{goodInfo,columnsList}"></detail-base-info>
				<detail-shop-info :shop-info="shopInfo"></detail-shop-info>
				<detail-good-info :good-detail-info="goodDetailInfo"></detail-good-info>
			</template>

			<template v-if="currentDetailPageIndex === 1">
				<detail-good-param :good-params="{goodParamRule,goodParamInfo}"></detail-good-param>
			</template>

			<template v-if="currentDetailPageIndex === 2">
				<detail-good-comment :good-rate-list="goodRateList"></detail-good-comment>
			</template>

		</scroll-view>
	</view>
</template>

<script setup>
	import DetailTabBar from "./cpns/detail-tab-bar.vue"
	import DetailSwiper from "./cpns/detail-swiper.vue"
	import DetailBaseInfo from "./cpns/detail-base-info.vue"
	import DetailShopInfo from "./cpns/detail-shop-info.vue"
	import DetailGoodInfo from "./cpns/detail-good-info.vue"
	import DetailGoodParam from "./cpns/detail-good-param.vue"
	import DetailGoodComment from "./cpns/detail-good-comment.vue"
	import { onLoad } from "@dcloudio/uni-app"
	import { useDetailStore } from "@/store/detail.js"
	import { storeToRefs } from "pinia"
	import { ref } from "vue"

	const detailStore = useDetailStore()

	const { topImages, goodInfo, columnsList, shopInfo, goodDetailInfo, goodParamInfo, goodParamRule, goodRateList } =
	storeToRefs(detailStore)

	const props = defineProps({
		id: {
			type: String,
			default: ""
		}
	})

	onLoad(() => {
		detailStore.fetchDetailPageData(props.id)
	})

	const currentDetailPageIndex = ref(0)

	const detailTabBarClick = (index) => {
		currentDetailPageIndex.value = index
	}
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