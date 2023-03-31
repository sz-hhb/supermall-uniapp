<template>
	<view class="base-info">
		<view class="good-desc">
			{{baseInfo.goodInfo.title}}
		</view>
		<view class="good-price">
			<view class="now-price">
				<text>{{baseInfo.goodInfo.price}}</text>
			</view>
			<view class="old-price">
				<text class="desc">{{baseInfo.goodInfo.oldPrice}}</text>
				<text v-if="baseInfo.goodInfo.discountDesc" class="discount">{{baseInfo.goodInfo.discountDesc}}</text>
			</view>
		</view>
		<view class="good-columns">
			<template v-for="(item, index) in baseInfo.columnsList" :key="index">
				<view class="column-item">{{item}}</view>
			</template>
		</view>
		<view class="promise-colums">
			<text>延误必赔</text>
			<view class="colums">
				<view class="right-select"></view><text>退货补运费</text>
			</view>
			<view class="colums">
				<view class="right-select"></view><text>全国包邮</text>
			</view>
			<view class="colums">
				<view class="right-select"></view><text>7天无理由退货</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		baseInfo: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.base-info {
		display: flex;
		flex-direction: column;
		border-bottom: 10rpx solid #f2f2f2;

		.good {
			&-desc {
				padding: 10rpx;
			}

			&-price {
				display: flex;
				align-items: flex-end;
				gap: 10rpx;
				padding: 20rpx 10rpx;

				.now-price {
					font-size: 45rpx;
					color: #ff8198;
				}

				.old-price {
					display: flex;
					margin-bottom: 4rpx;

					.desc {
						color: #9d9d9d;
						text-decoration: line-through;
					}

					.discount {
						position: relative;
						top: -30rpx;
						padding: 6rpx 10rpx;
						border-radius: 15rpx;
						font-size: 24rpx;
						color: #ffffff;
						background-color: #ff8198;
					}
				}
			}

			&-columns {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 10rpx;
				border-bottom: 2rpx solid #efefef;

				.column-item {
					color: #a9a9a9;
					font-size: 28rpx;
					padding-bottom: 20rpx;
				}
			}
		}

		.promise-colums {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 40rpx 10rpx;
			font-size: 28rpx;

			.colums {
				display: flex;
				align-items: center;
			}

			.right-select {
				position: relative;
				width: 26rpx;
				height: 26rpx;
				border: 2rpx solid #3f3e40;
				border-radius: 50%;

				&::after {
					position: absolute;
					left: 10rpx;
					top: 4rpx;
					content: "";
					display: inline-block;
					width: 6rpx;
					height: 12rpx;
					border: 2rpx solid #3f3e40;
					border-left: 0;
					border-top: 0;
					transform: rotate(45deg);
				}
			}
		}
	}
</style>