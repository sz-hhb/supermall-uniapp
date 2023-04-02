<template>
	<view class="category-menu">
		<scroll-view class="menu-scroll-view" scroll-y="true">
			<view class="menu-item-wrapper">
				<template v-for="(item, index) in menuList" :key="item.maitKey">
					<view class="menu-item" :class="{active: index === currentItemIndex}"
						@click="menuItemClick(index, item.maitKey, item.miniWallkey)">
						<text class="title">{{item.title}}</text>
					</view>
				</template>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import { computed, ref, watch } from "vue"

	const props = defineProps({
		menuList: {
			type: Array,
			default: () => []
		}
	})

	const initMaitKey = computed(() => {
		return props.menuList[0]?.maitKey
	})

	const initminiWallKey = computed(() => {
		return props.menuList[0]?.miniWallkey
	})

	const emits = defineEmits(["menu-item-click"])

	const currentItemIndex = ref(0)

	watch(() => [initMaitKey.value, initminiWallKey.value], ([newMaitKey, newMiniWllKey]) => {
		emits("menu-item-click", newMaitKey, newMiniWllKey)
	})

	const menuItemClick = (index, maitKey, miniWallkey) => {
		currentItemIndex.value = index
		emits("menu-item-click", maitKey, miniWallkey)
	}
</script>

<style lang="scss">
	.category-menu {
		height: 100%;
		overflow: hidden;

		.menu-scroll-view {
			height: 100%;
		}

		.menu-item {
			display: flex;
			width: 200rpx;
			height: 90rpx;
			background-color: #f6f6f6;

			&.active {
				color: #ff5777;
				font-weight: 700;
				background-color: #fff;
				border-left: 4rpx solid #ff5777;
			}

			.title {
				margin: auto;
			}
		}
	}
</style>