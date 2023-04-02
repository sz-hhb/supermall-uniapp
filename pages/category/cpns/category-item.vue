<template>
	<view class="category-item" @click="categoryItemClick(itemInfo.link)">
		<image class="image" :src="itemInfo.image"></image>
		<view>{{itemInfo.title}}</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		itemInfo: {
			type: Object,
			default: () => {}
		}
	})

	const emits = defineEmits(["category-item-click"])

	const categoryItemClick = (link) => {
		emits("category-item-click", link)
	}
</script>

<style lang="scss">
	.category-item {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		align-items: center;
		width: 30%;

		.image {
			width: 130rpx;
			height: 130rpx;
		}
	}
</style>