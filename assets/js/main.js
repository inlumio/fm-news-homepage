const navToggler = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLink = document.querySelectorAll('.nav__link');

navToggler.addEventListener('click', () => {
	navToggler.classList.toggle('active');
	navList.classList.toggle('active');
});

navLink.forEach(n => n.addEventListener('click', () => {
	navToggler.classList.remove('active');
}));