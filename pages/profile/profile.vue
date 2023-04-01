<template>
	<view class="profile-wrapper">
		<user-info></user-info>
		<assets-detail :assets-info="assetsInfo"></assets-detail>

		<view class="order-list-wrapper">
			<user-list-view :listItem="orderList"></user-list-view>
		</view>

		<view class="service-list-wrapper">
			<user-list-view :listItem="serviceList"></user-list-view>
		</view>
	</view>
</template>

<script setup>
	import UserInfo from "./cpns/user-info.vue"
	import AssetsDetail from "./cpns/assets-detail.vue"
	import UserListView from "./cpns/user-list-view.vue"
	import messagePNG from "@/static/images/profile/message.png"
	import appPNG from "@/static/images/profile/app.png"
	import vipPNG from "@/static/images/profile/vip.png"
	import cartPNG from "@/static/images/profile/cart.png"
	import pointerPNG from "@/static/images/profile/pointer.png"
	import { reactive } from "vue"

	const assetsInfo = reactive([{
			id: 0,
			label: "我的余额",
			balance: "0.00",
			utils: "元"
		},
		{
			id: 1,
			label: "我的优惠",
			balance: "0",
			utils: "个"
		},
		{
			id: 2,
			label: "我的积分",
			balance: "0",
			utils: "分"
		}
	])

	const orderList = reactive([
		{ icon: messagePNG, iconColor: "#ff8198", info: "我的消息" },
		{ icon: appPNG, iconColor: "#fc7b53", info: "积分商城" },
		{ icon: vipPNG, iconColor: "#ffc636", info: "会员卡" },
	])

	const serviceList = reactive([
		{ icon: cartPNG, iconColor: "#ff8198", info: "我的购物车" },
		{ icon: pointerPNG, iconColor: "#ff8198", info: "下载购物APP" },
	])
</script>

<style lang="scss">
	.order-list-wrapper {
		border-bottom: 30rpx solid #f2f2f2;
	}
</style>