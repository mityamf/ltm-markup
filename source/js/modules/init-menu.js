import {disableScrolling, enableScrolling} from '../utils/scroll-lock';


const ESC = 27;
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.main-nav__toggle');
const mobileWidth = window.matchMedia('(max-width:767px)');
const tabletWidth = window.matchMedia('(max-width:1023px)');

const openMenu = () => {
  header.classList.add('header--menu-opened');
  if (mobileWidth.matches) {
    disableScrolling();
  }
  window.addEventListener('keydown', onEcsPress);
};

const closeMenu = () => {
  header.classList.remove('header--menu-opened');
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
  if (header.classList.contains('header--menu-opened')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const initMobileMenu = () => {
  if (tabletWidth.matches) {
    menuToggle.addEventListener('click', toggleMenu);
  } else {
    menuToggle.removeEventListener('click', toggleMenu);
  }
};

const initMenu = () => {
  initMobileMenu();

  window.addEventListener('resize', initMobileMenu);
};

export {initMenu};
