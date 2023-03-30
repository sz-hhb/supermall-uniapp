import { defineStore } from "pinia"
import { getHomeMultiData, getHomeData } from "@/service/home.js"

export const types = ["pop", "new", "sell"]

function getGoodslistData() {
	let goodsListOrigin = {}
	types.forEach((item) => {
		goodsListOrigin[item] = { page: 0, list: [] }
	})
	return goodsListOrigin
}

export const useHomeStore = defineStore("home", {
	state: () => {
		return {
			banners: [],
			recommends: [],
			goodsList: getGoodslistData()
		}
	},
	getters: {

	},
	actions: {
		async fetchHomeMultiData() {
			const res = await getHomeMultiData()
			this.banners = res.data.banner.list
			this.recommends = res.data.recommend.list
		},
		async fetchHomeData(type, page) {
			const res = await getHomeData(type, page)
			this.goodsList[type].list.push(...res.data.list)
			this.goodsList[type].page = page
		}
	}
})