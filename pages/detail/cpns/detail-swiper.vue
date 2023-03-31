<template>
	<swiper class="swiper" :indicator-dots="true" indicator-color="#ff7555" :autoplay="true" :interval="3000"
		:duration="1000">
		<swiper-item v-for="(item, index) in bannerList" :key="index">
			<image class="image" :src="item" mode="widthFix"></image>
		</swiper-item>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		bannerList: {
			type: Array,
			default: () => []
		}
	})
</script>

<style lang="scss">
	.swiper {
		height: 640rpx;

		.image {
			width: 100%;
		}
	}
</style>