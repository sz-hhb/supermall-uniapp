<template>
	<view class="cart-list-item">
		<label class="radio" @click="radioChange(itemInfo)">
			<radio :checked="itemInfo.isCheck" color="#ff8198" @click="radioChange(itemInfo)" />
			<view class="good-info">
				<image class="image" :src="itemInfo.imgUrl"></image>
				<view class="good-desc">
					<view class="title">{{itemInfo.title}}</view>
					<view class="desc">{{itemInfo.desc}}</view>
					<view class="total">
						<text class="price">￥{{itemInfo.price}}</text>
						<text class="count">×{{itemInfo.count}}</text>
					</view>
				</view>
			</view>
		</label>
	</view>
</template>

<script setup>
	const props = defineProps({
		itemInfo: {
			type: Object,
			default: () => {}
		}
	})

	const emits = defineEmits(["radio-change"])

	const radioChange = (itemInfo) => {
		emits("radio-change", itemInfo.iid)
	}
</script>

<style lang="scss">
	.cart-list-item {
		padding: 20rpx 10rpx;
		border-bottom: 2rpx solid #cccccc;

		.radio {
			display: flex;
			align-items: center;

			.good-info {
				width: 100%;
				display: flex;
				align-items: flex-start;
				gap: 20rpx;

				.image {
					width: 180rpx;
					height: 240rpx;
					min-width: 160rpx;
					border-radius: 30rpx;
				}

				.good-desc {
					display: flex;
					flex-direction: column;
					gap: 40rpx;
					flex: 1;
					width: 0;


					.title,
					.desc {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.title {
						font-size: 36rpx;
						color: #333333;
					}

					.desc {
						font-size: 30rpx;
						color: #747774;
					}

					.total {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.price {
							color: #ff4500;
							font-size: 38rpx;
						}

						.count {
							margin-right: 50rpx;
							font-size: 38rpx;
						}
					}
				}
			}
		}
	}
</style>