// Add event listeners to nav menu buttons
const mobileMenu = document.querySelector('.nav__mobile-nav');
const openMenuBtn = document.querySelector('.nav__menu-button--open');
const closeMenuBtn = document.querySelector('.nav__menu-button--close');

if (mobileMenu && openMenuBtn) {
  const openMenu = () => {
    mobileMenu.classList.add('nav__mobile-nav--open');
  };
  openMenuBtn.addEventListener('click', openMenu);
}

if (mobileMenu && closeMenuBtn) {
  const closeMenu = () => {
    mobileMenu.classList.remove('nav__mobile-nav--open');
  };
  closeMenuBtn.addEventListener('click', closeMenu);
}
