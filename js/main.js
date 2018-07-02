var showNavBtn = document.querySelector(".main-nav__show"),
    mainNavItem = document.getElementsByClassName("main-nav__item"),
    hideNavBtn = document.querySelector(".main-nav__hide");

function showNav() { 
	for (var e = 0; e < mainNavItem.length - 1; e++) 
		mainNavItem[e].classList.remove("mobile-hidden");
    hideNavBtn.classList.remove("mobile-hidden") 
  }

function hideNav() { 
	for (var e = 0; e < mainNavItem.length - 1; e++) 
		mainNavItem[e].classList.add("mobile-hidden");
    this.classList.add("mobile-hidden") } 
    showNavBtn.addEventListener("click", showNav), 
    hideNavBtn.addEventListener("click", hideNav);
 console.log("hello");