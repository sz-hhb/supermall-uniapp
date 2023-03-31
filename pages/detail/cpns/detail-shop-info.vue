<template>
	<view class="shop-info-wrapper">
		<view class="shop-info-header">
			<image class="image" :src="shopInfo.shopLogo" mode="widthFix"></image>
			<view class="title">{{shopInfo.name}}</view>
		</view>
		<view class="shop-info-main">
			<view class="desc-left">
				<view class="gross-sales">
					<view>{{myriabitFormat(shopInfo.cSells) + "万"}}</view>
					<view class="label">总销量</view>
				</view>
				<view class="all-goods">
					<view>{{shopInfo.cGoods}}</view>
					<view class="label">全部宝贝</view>
				</view>
			</view>
			<view class="boundary"></view>
			<view class="desc-right">
				<template v-for="(item, index) in shopInfo.score" :key="index">
					<view class="shop-evaluate">
						<text>{{item.name}}</text>
						<text :class="item.isBetter ? 'better' : 'bad'">{{item.score}}</text>
						<text class="shop-bad" :class="{'shop-better': item.isBetter}">
							{{item.isBetter ? "高" : "低"}}
						</text>
					</view>
				</template>
			</view>
		</view>
		<view class="shop-info-bottom">
			<button type="default">进店逛逛</button>
		</view>
	</view>
</template>

<script setup>
	import { myriabitFormat } from "@/utils/format.js"
	const props = defineProps({
		shopInfo: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.shop-info {
		&-wrapper {
			padding: 40rpx 60rpx 40rpx 20rpx;
			border-bottom: 10rpx solid #f2f2f2;
		}

		&-header {
			display: flex;
			align-items: center;
			gap: 10rpx;

			.image {
				width: 100rpx;
				border: 2rpx solid #f3f3f3;
				border-radius: 50%;
			}
		}

		&-main {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 60rpx;
			margin-top: 40rpx;

			.boundary {
				width: 0rpx;
				height: 100rpx;
				border: 2rpx solid #ebebeb;
			}

			.desc {
				&-left {
					display: flex;
					gap: 60rpx;

					.gross-sales {
						display: flex;
						align-items: center;
						flex-direction: column;
						gap: 20rpx;
						font-size: 34rpx;
					}

					.all-goods {
						display: flex;
						align-items: center;
						flex-direction: column;
						gap: 20rpx;
						font-size: 34rpx;
					}

					.label {
						font-size: 24rpx;
					}
				}

				&-right {
					display: flex;
					flex-direction: column;
					gap: 20rpx;

					.better {
						color: #f13e3a;
					}

					.bad {
						color: #78b553;
					}

					.shop-evaluate {
						display: flex;
						gap: 10rpx;
						font-size: 28rpx;


						.shop-bad {
							color: #fff;
							background-color: #5ea732;
						}

						.shop-better {
							background-color: #f13e3a;
						}
					}
				}
			}
		}

		&-bottom {
			margin-top: 30rpx;

			button {
				width: 350rpx;
				height: 72rpx;
				line-height: 52rpx;
				border-radius: 20rpx;
				padding: 10rpx 60rpx;
				font-size: 28rpx;
				background-color: #f2f5f8;
			}
		}
	}
</style>