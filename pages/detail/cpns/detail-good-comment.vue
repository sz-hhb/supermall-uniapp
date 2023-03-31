<template>
	<view class="good-rate-wrapper">
		<view class="good-rate-header">
			<view class="title">用户评价</view>
			<view class="more">
				<text>更多</text>
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
		</view>
		<view class="good-rate-main">
			<template v-for="(item, index) in goodRateList" :key="item.rateId">
				<view class="user-comment-item">
					<view class="info">
						<image class="image" :src="item.user.avatar" mode="widthFix"></image>
						<text>{{item.user.uname}}</text>
					</view>
					<view class="comment">
						<text>{{item.content}}</text>
					</view>
					<view class="time">
						<text>{{timeFormat(item.created)}}</text>
						<text>{{item.style}}</text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import { timeFormat } from "@/utils/format.js"

	const props = defineProps({
		goodRateList: {
			type: Array,
			default: () => []
		}
	})
</script>

<style lang="scss">
	.good-rate {
		&-wrapper {
			display: flex;
			flex-direction: column;
			padding: 30rpx 20rpx;
		}

		&-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 30rpx;
			border-bottom: 2rpx solid #e7e7e7;

			.more {
				display: flex;
				align-items: center;
				gap: 10rpx;
				color: #393333;
			}
		}

		&-main {
			display: flex;
			flex-direction: column;
			gap: 20rpx;
			padding: 20rpx 0;

			.user-comment-item {
				display: flex;
				flex-direction: column;
				gap: 20rpx;

				.info {
					display: flex;
					align-items: center;
					gap: 20rpx;

					.image {
						width: 80rpx;
						border-radius: 50%;
					}
				}

				.comment {
					font-size: 28rpx;
					color: #777777;
				}

				.time {
					display: flex;
					align-items: center;
					gap: 20rpx;
					font-size: 26rpx;
					color: #999999;
				}
			}
		}
	}
</style>