<template>
	<view class="good-info-wrapper">
		<view class="good-desc clear-fix">
			<view class="start"></view>
			<view class="desc">{{goodDetailInfo.desc}}</view>
			<view class="end"></view>
		</view>
		<view class="wearer-effect">
			<view v-if="goodDetailInfo?.detailImage?.length" class="title">
				{{goodDetailInfo.detailImage[0].key}}
			</view>
			<view v-if="goodDetailInfo?.detailImage?.length" class="wearer-img">
				<template v-for="(item, index) in goodDetailInfo.detailImage[0].list" :key="index">
					<view class="wearer-img-item">
						<image class="image" :src="item" mode="widthFix"></image>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		goodDetailInfo: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.good-info-wrapper {
		display: flex;
		flex-direction: column;

		.clear-fix {
			zoom: 1;

			&::after {
				content: "";
				display: block;
				clear: both;
			}
		}

		.good-desc {
			padding: 30rpx;

			.start {
				position: relative;
				width: 180rpx;
				height: 2rpx;
				background-color: #a3a3a5;

				&::before {
					content: "";
					position: absolute;
					top: -10rpx;
					display: inline-block;
					width: 10rpx;
					height: 10rpx;
					background-color: #333333;
				}
			}

			.desc {
				padding: 30rpx 0;
				font-size: 28rpx;
			}

			.end {
				float: right;
				position: relative;
				width: 180rpx;
				height: 2rpx;
				background-color: #a3a3a5;

				&::after {
					content: "";
					position: absolute;
					top: -10rpx;
					right: 0;
					display: inline-block;
					width: 10rpx;
					height: 10rpx;
					background-color: #333333;
				}
			}
		}

		.wearer-effect {
			display: flex;
			flex-direction: column;
			gap: 10rpx;

			.title {
				padding: 0 30rpx;
			}

			.image {
				width: 100%;
			}
		}
	}
</style>