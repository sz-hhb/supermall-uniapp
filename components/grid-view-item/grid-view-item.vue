<template>
	<view class="goods-item" @click="goodsItemClick(newGoodsInfo.iid)">
		<!-- #ifndef H5 -->
		<image class="image" :lazy-load="true" :src="newGoodsInfo.img" mode="widthFix"></image>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<img class="image" v-lazy="newGoodsInfo.img">
		<!-- #endif -->
		<view class="desc-info">
			<view class="title">{{newGoodsInfo.title}}</view>
			<view class="info">
				<text class="price">￥{{newGoodsInfo.price}}</text>
				<image class="cfav-img" src="@/static/images/common/favor.png" mode="widthFix"></image>
				<text class="cfav">{{newGoodsInfo.cfav}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { computed } from "vue"

	const props = defineProps({
		goodsInfo: {
			type: Object,
			default: () => {}
		}
	})

	const newGoodsInfo = computed(() => {
		if (props.goodsInfo.show) {
			props.goodsInfo.img = props.goodsInfo.show.img
			return props.goodsInfo
		} else {
			return props.goodsInfo
		}
	})

	const emits = defineEmits(["goods-item-click"])

	const goodsItemClick = (id) => {
		emits("goods-item-click", id)
	}
</script>

<style lang="scss">
	.goods-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rpx;
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