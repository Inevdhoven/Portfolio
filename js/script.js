let hamburger = document.querySelector('.mobile-menu');
const hamburgerBtn = document.querySelector('.mobile-menu button');
const uitklapMenu = document.querySelector('.menu');

hamburger.addEventListener('click', openHamburger);

function openHamburger() {
    uitklapMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
} 