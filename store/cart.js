import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
	state: () => {
		return {
			cartList: [],
			isCheckAll: false,
			totalCount: 0,
			totalPrice: 0
		}
	},
	getters: {
		getCartListLength: (state) => {
			return state.cartList.length
		},
		getTotalPrice: (state) => {
			return state.cartList.reduce((preVal, curVal) => {
				if (curVal.isCheck) {
					return preVal + (curVal.price * curVal.count)
				} else {
					return preVal + 0
				}
			}, 0)
		},
		getTotalCount: (state) => {
			return state.cartList.reduce((preVal, curVal) => {
				if (curVal.isCheck) {
					return preVal + curVal.count
				} else {
					return preVal + 0
				}
			}, 0)
		}
	},
	actions: {
		filterCartList(payload) {
			const goodInfo = this.cartList.find(item => item.iid === payload.iid)

			if (goodInfo) {
				goodInfo.count += 1
			} else {
				payload.count = 1
				payload.isCheck = true
				this.cartList.push(payload)
			}
		},
		addToCart(payload) {
			if (!this.getCartListLength) {
				payload.count = 1
				payload.isCheck = true
				this.cartList.push(payload)
				this.isCheckAll = true
			} else {
				this.filterCartList(payload)
			}
		},
		changeGoodCheck(iid) {
			const goodInfo = this.cartList.find(item => item.iid === iid)

			if (goodInfo) {
				goodInfo.isCheck = !goodInfo.isCheck
			}

			const isOneOfFalse = this.cartList.some((item) => {
				return item.isCheck === false
			})

			if (isOneOfFalse) {
				this.isCheckAll = false
			}

			const isTrueAll = this.cartList.every((item) => {
				return item.isCheck
			})

			if (isTrueAll) {
				this.isCheckAll = true
			}
		},
		changeCheckAllRadioStatus() {
			this.isCheckAll = !this.isCheckAll

			if (this.isCheckAll) {
				this.cartList.forEach((item, index) => {
					item.isCheck = true
				})
			} else {
				this.cartList.forEach((item, index) => {
					item.isCheck = false
				})
			}
		}
	}
})