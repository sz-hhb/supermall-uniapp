import HyQuest from "@/service/index.js"

export function getHomeMultiData() {
	return HyQuest.get("/home/multidata")
}

export function getHomeData(type, page) {
	return HyQuest.get("/home/data", { type, page })
}