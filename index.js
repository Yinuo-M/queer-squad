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

  // Trap focus when mobile nav is open
  const firstFocusableElement = closeMenuBtn;
  const lastFocusableElement = mobileMenu.querySelector('.nav__link--donate a'); // get last element to be focused inside modal

  mobileMenu.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
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
