<template>
	<swiper class="banner" indicator-color="pink" :indicator-dots="true" :autoplay="true" :interval="3000"
		:duration="1000">
		<template v-for="(item, index) in banners" :key="index">
			<swiper-item @click="handleBannerClick(item.link)">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})

	const emits = defineEmits(["bannerClick"])

	const handleBannerClick = (link) => {
		emits("bannerClick", link)
	}
</script>

<style lang="scss">
	.banner {
		.image {
			width: 100%;
		}
	}
</style>