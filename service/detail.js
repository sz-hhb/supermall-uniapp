import HyQuest from "@/service/index.js"

export function getDetailPageData(iid) {
	return HyQuest.get("/detail", { iid })
}

export function getDetailPageRecommendData() {
	return HyQuest.get("/detail/recommend")
}