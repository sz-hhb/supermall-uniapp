<template>
	<view class="list-view">
		<template v-for="(item, index) in listItem" :key="index">
			<view class="list-item">
				<image class="image" :src="item.icon" :class="{color: item.iconColor}"></image>
				<text>{{item.info}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	const props = defineProps({
		listItem: {
			type: Array,
			default: () => []
		}
	})
</script>

<style lang="scss">
	.list-view {
		.list-item {
			display: flex;
			align-items: center;
			gap: 20rpx;
			height: 88rpx;
			border-bottom: 2rpx solid #f9f9f9;
			font-size: 32rpx;

			.image {
				width: 40rpx;
				height: 40rpx;
				padding: 20rpx 30rpx;
			}
		}
	}
</style>