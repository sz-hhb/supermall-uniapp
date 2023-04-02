import HyQuest from "@/service/index.js"

export function getCategoryData() {
	return HyQuest.get("/category")
}

export function getSubCategoryData(maitKey) {
	return HyQuest.get("/subcategory", { maitKey })
}

export function getSubCategoryDetailData(data) {
	return HyQuest.get("/subcategory/detail", { ...data })
}