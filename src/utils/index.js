export const isEmptyData = (data) => {
	if (
		data instanceof Array ||
		typeof data === 'string' ||
		data instanceof String
	) {
		return data.length === 0
	} else if (data instanceof Number) {
		return false
	} else if (data === true || data === false) {
		return !data
	} else if (data instanceof Object) {
		return Object.keys(data).length === 0
	} else {
		return true
	}
}
