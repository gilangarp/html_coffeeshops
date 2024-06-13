

const toggleMenu = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar-nav');

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
