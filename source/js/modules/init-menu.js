import {disableScrolling, enableScrolling} from '../utils/scroll-lock';


const ESC = 27;
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.main-nav__toggle');
const breakpointWidth = window.matchMedia('(max-width:767px)');

const openMenu = () => {
  header.classList.add('header--mobile-opened');
  disableScrolling();
  window.addEventListener('keydown', onEcsPress);
};

const closeMenu = () => {
  header.classList.remove('header--mobile-opened');
  enableScrolling();
  window.removeEventListener('keydown', onEcsPress);
};

const onEcsPress = (evt) => {
  if (evt.keyCode === ESC) {
    evt.preventDefault();
    closeMenu();
  }
};

const toggleMenu = () => {
  if (header.classList.contains('header--mobile-opened')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const initMobileMenu = () => {
  if (breakpointWidth.matches) {
    menuToggle.addEventListener('click', toggleMenu);
  } else {
    closeMenu();
  }
};

const initMenu = () => {
  initMobileMenu();

  window.addEventListener('resize', initMobileMenu);
};

export {initMenu};
