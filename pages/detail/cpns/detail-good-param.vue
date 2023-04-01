<template>
	<view class="good-param-wrapper">
		<view class="good-param-rule">
			<uni-table emptyText="暂无更多数据">
				<uni-tr v-for="(item, index) in goodParams.goodParamRule" :key="index">
					<uni-td v-for="(childItem, childIndex) in item" :key="childIndex">
						{{ childItem }}
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="good-param-set">
			<uni-table emptyText="暂无更多数据">
				<uni-tr v-for="(item, index) in goodParams.goodParamInfo" :key="index">
					<uni-td class="set-key">{{item.key}}</uni-td>
					<uni-td class="set-value">{{item.value}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		goodParams: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.good-param-wrapper {
		padding-bottom: 30rpx;

		.set-key {
			min-width: 100rpx;
		}

		.set-value {
			color: #f17f76;
		}
	}
</style>