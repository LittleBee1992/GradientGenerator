import '../style.css'
import './modules/Date'
import './modules/Navbar'
import './modules/Copy'

import { generateValues } from './modules/Generate'
import { deleteColorCookies, getColorCookies, setColorsCookies } from './modules/LocalStorage'
import { btnBackground, changeBackground } from './modules/Ui'

const btnGenerate = document.querySelector('.generate')


// Generate random background
const generateColorValue = () => {
	// Deleting unnecessary data from local storage
	deleteColorCookies() 
	
	// get data Colors values
	const data = generateValues()
	
	// Set data colors to local storage
	setColorsCookies(data)
	
	// Get data colors from local storage
	
	const localStorageColors = getColorCookies()
	
	// change background color of btns
	btnBackground(localStorageColors)
	// change background color
	changeBackground(localStorageColors)
}

const init =()=>{
	
	const localStorageColors = getColorCookies()

	btnBackground(localStorageColors)
	changeBackground(localStorageColors)
	
}


btnGenerate.addEventListener('click', generateColorValue)
document.addEventListener('DOMContentLoaded',init)