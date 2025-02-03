const menuBtn = document.querySelector(".nav-menu-btn")
const navMobile = document.querySelector(".nav-mobile-menu")
const navLinks = document.querySelectorAll(".nav-mobile-menu-box ul li")

const toggleMenu = ()=>{
    // e.preventDefault()
   navMobile.classList.toggle('hide')
}
navLinks.forEach(item => item.addEventListener('click', toggleMenu))
menuBtn.addEventListener('click', toggleMenu)