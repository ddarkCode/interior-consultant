const navbarTogglerButton = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function changeDisplay() {
  navbarNav.style.width = '100%';
  navbarNav.style.height = '100vh';
  navbarNav.style.display = 'flex';
  navbarNav.style.justifyContent = 'center';
  navbarNav.style.alignItems = 'center';
}

navbarTogglerButton.addEventListener('click', changeDisplay);
