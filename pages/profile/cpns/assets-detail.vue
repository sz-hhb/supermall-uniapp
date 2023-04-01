<template>
	<view class="assets-detail">
		<view class="assets-list">
			<template v-for="(item, index) in assetsInfo" :key="item.id">
				<view class="assets-item">
					<view>
						<text class="assets-balance">{{item.balance}}</text>
						<text>{{item.utils}}</text>
					</view>
					<view class="">{{item.label}}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		assetsInfo: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.assets {
		&-detail {
			padding: 0 10rpx;
			border-bottom: 30rpx solid #f2f2f2;
		}

		&-list {
			display: flex;
		}

		&-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10rpx;
			padding: 40rpx 0;

			&:nth-child(1) {
				border-right: 2rpx solid #fafafa;
			}

			&:nth-child(2) {
				border-right: 2rpx solid #fafafa;
			}

			.assets-balance {
				font-size: 50rpx;
				font-weight: 700;
				color: #ff5f3e;
			}
		}
	}
</style>