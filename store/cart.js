import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
	state: () => {
		return {
			cartList: []
		}
	},
	getters: {
		getCartListLength: (state) => {
			return state.cartList.length
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
			} else {
				this.filterCartList(payload)
			}
		}
	}
})