const setColorsCookies = item => {
	let colors

	if (localStorage.getItem('colors') == null) {
		colors = []

		colors.push(item)

		localStorage.setItem('colors', JSON.stringify(colors))
	} else {
		colors = JSON.parse(localStorage.getItem('colors'))

		colors.push(item)
		localStorage.setItem('colors', JSON.stringify(colors))
	}
}
const getColorCookies = () => {
	let colors

	if (localStorage.getItem('colors') == null) {
		colors = []
	} else {
		colors = JSON.parse(localStorage.getItem('colors'))
	}

	return colors
}

const deleteColorCookies = () => {
	let colors
    
	if (localStorage.getItem('colors') == null) {
        colors = []
	} else {
        colors = JSON.parse(localStorage.getItem('colors'))
        

		colors.forEach((item, index) => {
			colors.splice(index, 1)
		})
	}
    localStorage.setItem('colors', JSON.stringify(colors))
}

export { setColorsCookies, getColorCookies, deleteColorCookies }
