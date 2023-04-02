<template>
	<view class="cart-page-wrapper">
		<view class="cart-list-wrapper">
			<template v-for="(item, index) in cartList" :key="item.iid">
				<cart-list-item :item-info="item" @radio-change="radioChange"></cart-list-item>
			</template>
		</view>
		<view class="cart-total-price">
			<cart-bottom-nav :total-info="{totalCount,totalPrice,isCheckAll}"
				@change-radio-status="changeRadioStatus"></cart-bottom-nav>
		</view>
	</view>
</template>

<script setup>
	import CartListItem from "./cpns/cart-list-item.vue"
	import CartBottomNav from "./cpns/cart-bottom-nav.vue"
	import { useCartStore } from "@/store/cart.js"
	import { storeToRefs } from "pinia"
	import { computed } from "vue"

	const cartStore = useCartStore()
	const { cartList, isCheckAll } = storeToRefs(cartStore)

	const totalPrice = computed(() => {
		return cartStore.getTotalPrice
	})

	const totalCount = computed(() => {
		return cartStore.getTotalCount
	})

	const radioChange = (iid) => {
		cartStore.changeGoodCheck(iid)
	}

	const changeRadioStatus = () => {
		cartStore.changeCheckAllRadioStatus()
	}
</script>

<style lang="scss">
	.cart-page-wrapper {
		position: relative;
		padding-bottom: 240rpx;

		.cart-total-price {
			position: fixed;
			bottom: 100rpx;
			width: 100%;
		}
	}
</style>