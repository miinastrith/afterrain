const navBar = document.querySelector(".navigation");
const nav = window.addEventListener("scroll", () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle("scroll-active", positionWindow);
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".menu");

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('menu-active');
});

const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener('click', () => {
    sideBar.classList.remove('menu-active');
});