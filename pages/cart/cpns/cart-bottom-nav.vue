<template>
	<view class="cart-bottom-nav">
		<view class="nav-left">
			<label class="radio">
				<radio :checked="totalInfo.isCheckAll" color="#ff8198" @click="changeRadioStatus" />
				<text>全选</text>
				<text>合计：￥{{totalInfo.totalPrice}}</text>
			</label>
		</view>
		<view class="nav-right">
			<text>{{`去计算(${totalInfo.totalCount})`}}</text>
		</view>
	</view>
</template>

<script setup>
	import { computed, ref } from "vue"

	const props = defineProps({
		totalInfo: {
			type: Object,
			default: () => {}
		}
	})

	const emits = defineEmits(["change-radio-status"])

	const changeRadioStatus = () => {
		emits("change-radio-status")
	}
</script>

<style lang="scss">
	.cart-bottom-nav {
		display: flex;

		.nav {
			&-left {
				flex: 1;
				padding: 20rpx;
				background-color: #eeeeee;

				.radio {
					display: flex;
					align-items: center;
					gap: 20rpx;
				}
			}

			&-right {
				display: flex;
				width: 200rpx;
				background-color: #ff4500;

				text {
					margin: auto;
					color: #fff
				}
			}
		}
	}
</style>