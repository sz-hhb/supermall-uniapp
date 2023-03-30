<template>
	<view class="recommend-wrapper">
		<template v-for="(item, index) in recommends" :key="index">
			<view class="recommend-item" @click="recommendItemClick(item.link)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<view class="title">{{item.title}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	const props = defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})

	const emits = defineEmits(["recommend-item-click"])

	const recommendItemClick = (link) => {
		emits("recommend-item-click", link)
	}
</script>

<style lang="scss">
	.recommend-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;

		.recommend-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 28rpx;

			.image {
				width: 150rpx;
				height: 150rpx;
			}

			.title {
				margin-top: 10rpx;
			}
		}
	}
</style>