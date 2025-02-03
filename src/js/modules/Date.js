const time = document.querySelector(".nav-time")
const date = document.querySelector(".nav-date")

const currentTime =()=>{
	const data = new Date()
	

	const formatTime = new Intl.DateTimeFormat("pl-PL",{
		hour:"2-digit",
		minute:"2-digit"
	})
	const newTime = formatTime.format(data)
	

	time.textContent = newTime
	setTimeout(currentTime,1000)
}
const currentDate =()=>{
	const data = new Date()
	

	const formatTime = new Intl.DateTimeFormat("en-US",{
		day:"numeric",
		month:'long',
		year:'numeric',
		
	})
	const newDate = formatTime.format(data)
	

	date.textContent = newDate

	setTimeout(currentDate,1000)
}




currentDate()
currentTime()