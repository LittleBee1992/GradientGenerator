const copyIcon = document.querySelector('.copy-icon')
const gradientInfo = document.querySelector('.gradient-info')


copyIcon.addEventListener('click', () => {
	navigator.clipboard.writeText(gradientInfo.textContent)
})



