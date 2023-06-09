const BASE_URL = "http://localhost:3007"

class HYQuest {
	request(url, method, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				timeout: 10000,
				method: method,
				data: data,
				success: (res) => {
					resolve(res.data)
				},
				fail: (err) => {
					throw err
				}
			})
		})
	}

	get(url, params) {
		return this.request(url, "GET", params)
	}

	post(url, data) {
		return this.request(url, "POST", data)
	}
}

export default new HYQuest()