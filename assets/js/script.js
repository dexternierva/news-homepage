const container = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".menu__close-img");

// function to open mobile menu
const openMobileMenu = function () {
	menu.classList.add("menu--open");
	menu.classList.remove("menu--close");
	container.classList.add("container--with-overlay");
	document.body.style.overflow = "hidden";
}

// function to close mobile menu
const closeMobileMenu = function () {
	menu.classList.remove("menu--open");
	menu.classList.add("menu--close");
	container.classList.remove("container--with-overlay");
	document.body.style.overflow = "auto";
}

// function to remove a css class
const removeClass = function (element, className) {
	if(element.classList.contains(className)) {
		element.classList.remove(className);
	}
}

// handler for window resize event
const handleResize = function () {
	const minWidth = 768;

	if (window.innerWidth >= minWidth) {
		removeClass(menu, 'menu--close')
	}
}

// event listener for window resize
window.addEventListener('resize', handleResize);
handleResize();

// click events for mobile menu
hamburger.addEventListener("click", () => {
	openMobileMenu();
})

closeMenuIcon.addEventListener("click", () => {
	closeMobileMenu();
})
