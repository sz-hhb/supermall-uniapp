export function myriabitFormat(num) {
	return (parseInt(num) / 10000).toFixed(1)
}

export function timeFormat(time) {
	let timeStr = time * 1000
	let newTime = new Date(timeStr)
	let year = newTime.getFullYear()
	let month = newTime.getMonth() + 1 >= 10 ? "0" + (newTime.getMonth() + 1) : newTime.getMonth() + 1
	let day = newTime.getDate()

	return `${year}-${month}-${day}`
}