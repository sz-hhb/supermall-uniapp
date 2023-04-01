<template>
	<view class="uni-container">
		<uni-section title="">
			<uni-goods-nav :options="options" @click="onClick" @buttonClick="buttonClick" />
		</uni-section>
	</view>
</template>

<script setup>
	import { reactive } from "vue"

	const options = reactive([{
		icon: "shop",
		text: "店铺",
	}, {
		icon: "cart",
		text: "购物车",
		info: 0
	}])

	const onClick = (e) => {
		uni.showToast({
			title: `点击${e.content.text}`,
			icon: "none"
		})
	}

	const buttonClick = (e) => {
		console.log(e)
		options[1].info++;
	}
</script>

<style lang="scss">
	.uni-container {
		position: fixed;
		bottom: 0;
		width: 100%;

		:deep(.uni-section .uni-section-header) {
			display: none !important;
		}

		:deep(.uni-section-content) {
			height: 120rpx;
		}

		:deep(.uni-goods-nav) {
			height: 100%;
		}

		:deep(.uni-tab__cart-box) {
			height: 100%;
		}
	}
</style>