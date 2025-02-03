const body = document.querySelector('body')
const gradientInfo = document.querySelector('.gradient-info')
const navMobileBgc = document.querySelector('.nav-mobile-menu')
const label = document.querySelectorAll('.label')

const btn1 = document.getElementById('hex1')
const btn2 = document.getElementById('hex2')
const btn3 = document.getElementById('hex3')

const btnBackground=(item)=>{
	// Destructing object
	
	const { rgb1, rgb2, rgb3 } = item[0]

	// set buttons value and background color
	btn1.value = rgb1
	btn2.value = rgb2

	btn1.style.backgroundColor = rgb1
	btn2.style.backgroundColor = rgb2
	
	if(label.length > 2){
		btn3.value = rgb3
		btn3.style.backgroundColor = rgb3
	}
	


}


const changeBackground = item => {
	
	// Destructing object
	
	const { rgb1, rgb2, rgb3, currentOrientation } = item[0]
   
	

	if (label.length === 2) {
		if (currentOrientation !== 'circle') {
			body.style.backgroundImage = `linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
			navMobileBgc.style.backgroundImage = `linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
			gradientInfo.textContent = `background-image:linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
		} else {
			body.style.backgroundImage = `radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
			navMobileBgc.style.backgroundImage = `radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
			gradientInfo.textContent = `background-image:radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2})`
		}
	} else {
		if (currentOrientation !== 'circle') {
			
			body.style.backgroundImage = `linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2}, ${rgb3})`
			navMobileBgc.style.backgroundImage = `linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2},${rgb3})`
			gradientInfo.textContent = `background-image:linear-gradient(${currentOrientation}, ${rgb1}, ${rgb2},${rgb3})`
		} else {
			btn3.value = rgb3
			body.style.backgroundImage = `radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2}, ${rgb3})`
			navMobileBgc.style.backgroundImage = `radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2},${rgb3})`
			gradientInfo.textContent = `background-image:radial-gradient(${currentOrientation}, ${rgb1}, ${rgb2},${rgb3})`
		}
	}
}

export{
    changeBackground,
	btnBackground
}