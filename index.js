const menuBtn = Array.from(document.querySelector(".menu-btn"));
const nav = document.querySelector("nav");

function toggleMenu() {
    nav.classList.toggle("show-menu");
}

for (btn in menuBtn) {
    menuBtn[btn].addEventListener("click", toggleMenu);
}