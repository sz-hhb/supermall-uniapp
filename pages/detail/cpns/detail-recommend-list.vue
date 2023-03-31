<template>
	<view class="recommend-list-wrapper">
		<view class="recommend-title">热门推荐</view>
		<view class="recommend-list">
			<template v-for="(item, index) in recommendList" :key="index">
				<view class="recommend-item">
					<image class="image" :src="item.image" mode="widthFix"></image>
					<view class="desc">{{item.title}}</view>
					<view class="info">
						<text class="price">￥{{item.price}}</text>
						<uni-icons type="star" size="20"></uni-icons>
						<text>{{item.cfav}}</text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		recommendList: {
			type: Array,
			default: () => []
		}
	})
</script>

<style lang="scss">
	.recommend {
		&-list-wrapper {
			height: 100%;
			padding: 10rpx 0;
		}

		&-title {
			padding: 10rpx 20rpx;
		}

		&-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 10rpx;

			.recommend-item {
				display: flex;
				flex-direction: column;

				width: 48%;

				.image {
					width: 100%;
				}

				.desc {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.info {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 10rpx;

					.price {
						color: #ff57a3;
					}
				}
			}
		}
	}
</style>