const menu = document.getElementsByClassName("navlinks");
const dimBackground = document.querySelector('.overlay');
const subMenu = document.getElementsByClassName('submenu');
const dropToggle = document.getElementsByClassName('arrow-down')
const closeToggle = document.getElementsByClassName('arrow-up')

function openMenu(){
	menu[0].classList.add('active');
	dimBackground.style.display = 'block'
}
function closeMenu(){
	menu[0].classList.remove("active");
	dimBackground.style.display = 'none'
}
dimBackground.onclick = ()=> {
	closeMenu();
}
for (let i = 0; i < 2; i++){
	dropToggle[i].onclick = ()=> {
		closeToggle[i].style.display = 'block';
		dropToggle[i].style.display = 'none';
		subMenu[i].classList.add('active')
	}
	closeToggle[i].onclick = ()=> {
		closeToggle[i].style.display = 'none';
		dropToggle[i].style.display = 'block';
		subMenu[i].classList.remove('active');
	}
}


