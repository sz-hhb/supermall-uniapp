import { defineStore } from "pinia"
import { getDetailPageData } from "@/service/detail.js"

export const useDetailStore = defineStore("detail", {
	state: () => {
		return {
			topImages: [],
			goodInfo: {},
			columnsList: [],
			shopInfo: {},
			goodDetailInfo: {},
			goodParamInfo: [],
			goodParamRule: []
		}
	},
	actions: {
		async fetchDetailPageData(iid) {
			const res = await getDetailPageData(iid)
			this.topImages = res.result.itemInfo.topImages
			this.goodInfo = res.result.itemInfo
			this.columnsList = res.result.columns
			this.shopInfo = res.result.shopInfo
			this.goodDetailInfo = res.result.detailInfo;
			this.goodParamInfo = res.result.itemParams.info.set;
			this.goodParamRule = res.result.itemParams.rule.tables[0];
		}
	}
})