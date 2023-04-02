import { defineStore } from "pinia"
import { getCategoryData, getSubCategoryData, getSubCategoryDetailData } from "@/service/category.js"

export const types = ["pop", "new", 'sell']

function getGoodslistData() {
	let goodsListOrigin = {}
	types.forEach((item) => {
		goodsListOrigin[item] = { list: [] }
	})
	return goodsListOrigin
}

export const useCategoryStore = defineStore("category", {
	state: () => {
		return {
			categoryMenuList: [],
			subCategoryList: [],
			subCategoryRecommendList: getGoodslistData()
		}
	},
	actions: {
		async fetchCategoryMenuData() {
			const res = await getCategoryData()
			this.categoryMenuList = res.data.category.list
		},
		async fetchSubCategotyData(payload) {
			const res = await getSubCategoryData(payload)
			this.subCategoryList = res.data.list
		},
		async fetchSubCategoryDetailData(type, payload) {
			const res = await getSubCategoryDetailData(payload)
			this.subCategoryRecommendList[type].list.push(...res)
		}
	}
})