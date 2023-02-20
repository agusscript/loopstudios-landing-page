const buttonMenu = document.querySelector(".btn-menu");
const ulNav = document.querySelector(".ul-nav");
const iconOpenMenu = document.querySelector(".open-menu");
const iconCloseMenu = document.querySelector(".close-menu");

buttonMenu.onclick = function() {
    ulNav.classList.toggle("show-nav");
    iconOpenMenu.classList.toggle("occult");
    iconCloseMenu.classList.toggle("show");
};
