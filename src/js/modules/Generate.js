import { getValue } from "./Orientation"


const hexValue = ()=>{
	let hexaValue = '0123456789abcdef'
	let colors = '#'
	for (let i = 0; i < 6; i++) {
		colors = colors + hexaValue[Math.floor(Math.random() * 16)]
	}

	return colors
}


const generateValues =()=>{
	let rgb1 = hexValue()
	let rgb2 = hexValue()
	let rgb3 = hexValue()

	
	const currentOrientation = getValue()
	
	const data = {
		rgb1,
		rgb2,
		rgb3,
		currentOrientation,
	}
	return data
	
}


export {
	generateValues
}