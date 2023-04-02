<template>
	<view class="category-wrapper">
		<category-classification :menuList="categoryMenuList" @menu-item-click="menuItemClick"></category-classification>
		<view class="category-detail">
			<scroll-view class="item-scroll-view" scroll-y="true">
				<view class="category-item-list">
					<template v-for="(item, index) in subCategoryList" :key="index">
						<category-item :itemInfo="item" @category-item-click="categoryItemClick"></category-item>
					</template>
				</view>
				<tab-control :titles="['流行', '新款', '精选']" @tab-item-click="tabItemClick"></tab-control>
				<view class="recommend-list">
					<template v-for="(item, index) in subCategoryRecommendList[types[currentTabIndex]].list" :key="index">
						<view class="recommend-list-item">
							<grid-view-item :goodsInfo="item"></grid-view-item>
						</view>
					</template>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import CategoryClassification from "./cpns/category-classification.vue"
	import CategoryItem from "./cpns/category-item.vue"
	import { onLoad } from "@dcloudio/uni-app"
	import { storeToRefs } from "pinia"
	import { useCategoryStore, types } from "@/store/category.js"
	import { ref } from "vue"

	const categoryStore = useCategoryStore()
	const { categoryMenuList, subCategoryList, subCategoryRecommendList } = storeToRefs(categoryStore)

	onLoad(() => {
		categoryStore.fetchCategoryMenuData()
	})

	const miniWallKey = ref("")

	const menuItemClick = (maitKey, miniWallkey) => {
		miniWallKey.value = miniWallkey
		categoryStore.fetchSubCategotyData(maitKey)
		categoryStore.fetchSubCategoryDetailData("pop", { type: "pop", miniWallkey })
		categoryStore.fetchSubCategoryDetailData("new", { type: "new", miniWallkey })
		categoryStore.fetchSubCategoryDetailData("sell", { type: "sell", miniWallkey })
	}

	const currentTabIndex = ref(0)

	const tabItemClick = (index) => {
		currentTabIndex.value = index
		categoryStore.fetchSubCategoryDetailData(
			types[index], { type: types[index], miniWallkey: miniWallKey.value },
		)
	}

	const categoryItemClick = (link) => {
		console.log(link)
		uni.navigateTo({
			url: "/pages/webview/webview?link=" + link
		})
	}
</script>

<style lang="scss">
	.category-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		overflow: hidden;

		.category-detail {
			width: 0;
			padding: 20rpx 20rpx;
			flex: 1;

			.category-item-list {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: 20rpx;
				width: 100%;
			}

			.item-scroll-view {
				height: 100%;
			}

			.recommend-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.recommend-list-item {
					width: 46%;
				}
			}
		}
	}
</style>