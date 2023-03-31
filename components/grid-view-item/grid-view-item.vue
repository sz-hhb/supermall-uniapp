<template>
	<view class="goods-item">
		<!-- #ifndef H5 -->
		<image class="image" :lazy-load="true" :src="goodsInfo.show.img" mode="widthFix"></image>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<img class="image" v-lazy="goodsInfo.show.img">
		<!-- #endif -->
		<view class="desc-info">
			<view class="title">{{goodsInfo.title}}</view>
			<view class="info">
				<text class="price">￥{{goodsInfo.price}}</text>
				<image class="cfav-img" src="@/static/images/common/favor.png" mode="widthFix"></image>
				<text class="cfav">{{goodsInfo.cfav}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		goodsInfo: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rpx;
		width: 48%;
		padding-bottom: 10rpx;

		.image {
			width: 100%;
		}

		.desc-info {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.title {
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 28rpx;
			}

			.price {
				color: $gPrimaryColor;
			}

			.info {
				display: flex;
				align-items: center;
				gap: 10rpx;
				font-size: 26rpx;

				.cfav-img {
					width: 30rpx;
				}
			}
		}
	}
</style>