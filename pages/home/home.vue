<template>
	<view class="home">
		<home-banner :banners="banners" @banner-click="bannerClick"></home-banner>
		<home-recommend :recommends="recommends" @recommend-item-click="recommendItemClick"></home-recommend>
		<home-popular></home-popular>
		<tab-control :titles="['流行', '新款', '精选']" @tab-item-click="tabItemClick"></tab-control>
		<uni-grid :column="2" :square="false" :show-border="false" :highlight="false">
			<template v-for="(item, index) in goodsList[types[currentType]].list" :key="item.iid">
				<uni-grid-item>
					<grid-view-item :goods-info="item"></grid-view-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import HomeBanner from "./cpns/home-banner.vue"
	import HomeRecommend from "./cpns/home-recommend.vue"
	import HomePopular from "./cpns/home-popular.vue"
	import { ref, computed } from "vue"
	import { onLoad, onReachBottom } from "@dcloudio/uni-app"
	import { storeToRefs } from "pinia"
	import { useHomeStore, types } from "@/store/home.js"

	const homeStore = useHomeStore()
	const { banners, recommends, goodsList } = storeToRefs(homeStore)
	const currentType = ref(0)

	onLoad(() => {
		homeStore.fetchHomeMultiData()
		homeStore.fetchHomeData("pop", 1)
		homeStore.fetchHomeData("new", 1)
		homeStore.fetchHomeData("sell", 1)
	})

	onReachBottom(() => {
		homeStore.fetchHomeData(
			types[currentType.value],
			goodsList.value[[types[currentType.value]]].page + 1)
	})

	const bannerClick = (link) => {
		uni.navigateTo({
			url: "/pages/webview/webview?link=" + link
		})
	}

	const recommendItemClick = (link) => {
		uni.navigateTo({
			url: "/pages/webview/webview?link=" + link
		})
	}

	const tabItemClick = (index) => {
		currentType.value = index;
	}
</script>

<style lang="scss">
	.tab-control {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: rgba(255, 255, 255, 0.5);
	}
</style>