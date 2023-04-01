export function throttle(fn, delay) {
	let flag = true
	return function(...args) {
		if (flag) {
			setTimeout(() => {
				fn.call(this, ...args)
				flag = true
			}, delay)
		}
		flag = false
	}
}