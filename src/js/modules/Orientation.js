const btns = document.querySelectorAll('.btn')

const switchActive = e => {
	const target = e.target.parentElement
	
	btns.forEach(item => {
		if (item.matches('.active')) {
			item.classList.remove('active')
		}
	})
	if (target.matches('.btn')) {
		target.classList.add('active')
	}
}
btns.forEach(item => item.addEventListener('click', switchActive))


const getValue = ()=>{
	const active = document.querySelector('.active')
	let activeValue
	if(active === null){
		activeValue = 'to right top'
	}else{
		activeValue = active.value
	}
	
	return activeValue
}




export {
	getValue
}