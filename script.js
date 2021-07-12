const menu = document.querySelector('#mobile-menu-button');
const menuItems = document.querySelector('.nav-menu');
const nav = document.querySelector('.navbar');
const listItems = document.getElementById('nav-menu');
const cart = document.querySelector('#cart');
const searchNav = document.getElementById('search-nav');
const searchIcon = document.getElementById('nav-search-logo');
const searchBarX = document.getElementById('search-bar-x');
const body = document.getElementById('body')
const mobileNav = document.getElementById('mobile-nav');
const footerbar = document.querySelectorAll('.dropdown-header');
const dropdownContent = document.querySelectorAll('.dropdown-content');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
    nav.classList.toggle('black');
    cart.classList.toggle('hidden');
})

searchIcon.addEventListener('click', function() {
    searchNav.style.display = 'flex';
    listItems.style.display = 'none';
    /* body.style.backgroundColor = 'rgba(0,0,0,0.5)'; */
})

searchBarX.addEventListener('click', function() {
    searchNav.style.display = 'none';
    listItems.style.display = 'flex';
    body.style.backgroundColor = 'transparent';
})

for (let i = 0; i < footerbar.length; i++) {
    footerbar[i].addEventListener('click', function() {
        dropdownContent[i].classList.toggle('show-dropdown');
    })
}

    








