<template>
	<view class="detail-tab-bar">
		<template v-for="(item, index) in tabBarList" :key="item.id">
			<view class="tab-bar-item" @click="tabBarClick(index)">
				<text class="title" :class="{active: index === currentIndex}">{{item.title}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref, reactive } from "vue"

	const tabBarList = reactive([
		{ id: 0, title: "商品" },
		{ id: 1, title: "参数" },
		{ id: 2, title: "评论" },
		{ id: 3, title: "推荐" }
	])

	const currentIndex = ref(0)

	const emits = defineEmits(["detail-tab-bar-click"])

	const tabBarClick = (index) => {
		currentIndex.value = index
		emits("detail-tab-bar-click", index)
	}
</script>

<style lang="scss">
	.detail-tab-bar {
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 80rpx;
		background-color: rgba(255, 255, 255, 0.8);

		.tab-bar-item {
			flex: 1;
			text-align: center;

			.title {
				font-size: 30rpx;

				&.active {
					font-weight: 700;
					color: #ff8198;
				}
			}
		}
	}
</style>