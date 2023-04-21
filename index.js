// Add event listeners to nav menu buttons
const mobileMenu = document.querySelector('.nav__mobile-nav');
const openMenuBtn = document.querySelector('.nav__menu-button--open');
const closeMenuBtn = document.querySelector('.nav__menu-button--close');

if (mobileMenu && openMenuBtn) {
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');

    // Freeze body scroll
    document.body.classList.add('scroll-freeze');
  };
  openMenuBtn.addEventListener('click', openMenu);
}

if (mobileMenu && closeMenuBtn) {
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');

    // Defreeze body scroll
    document.body.classList.remove('scroll-freeze');
  };
  closeMenuBtn.addEventListener('click', closeMenu);

  const closeMenuOnClickOutside = (e) => {
    if (e.target === mobileMenu) closeMenu();
  };
  mobileMenu.addEventListener('click', closeMenuOnClickOutside);
}

// Add event listeners to nav language switcher
const languageBtn = document.querySelector('.nav__language-button');
const languageList = document.querySelector('.nav__language-list');
if (languageBtn && languageList) {
  const toggleList = () => {
    languageList.classList.toggle('hidden');
  };
  languageBtn.addEventListener('click', toggleList);
}
