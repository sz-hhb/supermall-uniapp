import HyQuest from "@/service/index.js"

export function getDetailPageData(iid) {
	return HyQuest.get("/detail", { iid })
}