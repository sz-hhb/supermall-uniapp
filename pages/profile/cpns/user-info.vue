<template>
	<view class="user-info-wrapper">
		<view class="user-info-left">
			<image class="image" src="@/static/images/profile/avatar-default.png" mode="widthFix"></image>
		</view>
		<view class="user-info-right">
			<view class="user-action">
				<view class="top">
					登录/注册
				</view>
				<view class="bottom">
					<image class="image" src="@/static/images/profile/phone.png" mode="widthFix"></image>
					<text>暂无绑定手机号</text>
				</view>
			</view>
			<image class="image" src="@/static/images/profile/arrow.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.user-info {
		&-wrapper {
			display: flex;
			align-items: center;
			gap: 20rpx;
			background-color: #ff8198;
			padding: 40rpx;
		}

		&-left {
			.image {
				width: 120rpx;
			}
		}

		&-right {
			flex: 1;
			display: flex;
			justify-content: space-between;
			align-items: center;


			.user-action {
				display: flex;
				flex-direction: column;
				gap: 10rpx;
				color: #ffe5ea;

				.top {
					font-size: 38rpx;
				}

				.bottom {
					display: flex;
					align-items: center;
					gap: 10rpx;
					font-size: 28rpx;
				}

				.image {
					width: 36rpx;
				}
			}

			.image {
				width: 32rpx;
			}
		}
	}
</style>