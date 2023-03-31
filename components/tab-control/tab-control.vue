<template>
	<view class="tab-control">
		<template v-for="(item, index) in titles" :key="index">
			<view class="tab-item" @click="tabClick(index)">
				<text class="title" :class="{active: index === currentIndex}">{{item}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref } from "vue"

	const currentIndex = ref(0)

	const props = defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})

	const emits = defineEmits(["tab-item-click"])

	const tabClick = (index) => {
		currentIndex.value = index
		emits("tab-item-click", index)
	}
</script>

<style lang="scss">
	.tab-control {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 20rpx 0;

		.tab-item {
			flex: 1;
			text-align: center;

			.title {
				padding: 10rpx;

				&.active {
					color: #ff5777;
					border-bottom: 6rpx solid #ff5777;
				}
			}
		}
	}
</style>