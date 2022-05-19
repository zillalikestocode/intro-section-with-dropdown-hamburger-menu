const menu = document.getElementsByClassName("navlinks");
const dimBackground = document.querySelector('.overlay')

function openMenu(){
	menu[0].classList.add('active');
	dimBackground.style.display = 'block'
}
function closeMenu(){
	menu[0].classList.remove("active");
	dimBackground.style.display = 'none'
}


