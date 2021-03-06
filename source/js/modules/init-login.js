import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const initLogin = () => {
  const login = document.querySelector('.login');
  const loginShowBtn = document.querySelector('.header__link--sign-in');
  const loginCloseBtn = login.querySelector('.login__close');
  const showPasswordBtn = login.querySelector('.login__show-password');
  const inputPassword = login.querySelector('input[type="password"]');
  const form = login.querySelector('.login__form');
  const forgotPasswordLink = login.querySelector('.login__forgot');
  const userEmail = login.querySelector('#login-email');
  const mobileWidth = window.matchMedia('(max-width:767px)');
  const isStorageSupport = true;
  const storage = {};
  const KeyCode = {
    ESC: 27,
  };
  let screenWidth = document.documentElement.clientWidth;

  const openPopup = () => {
    if (mobileWidth.matches) {
      disableScrolling();
      loginCloseBtn.addEventListener('click', closePopup);
    }

    if (!mobileWidth.matches) {
      login.style.maxHeight = login.scrollHeight + 'px';
      window.addEventListener('click', outsideClickListener);
    }

    login.classList.add('login--show');
    window.addEventListener('keydown', onEcsPress);
  };

  const closePopup = () => {

    if (mobileWidth.matches) {
      enableScrolling();
      loginCloseBtn.removeEventListener('click', closePopup);
    }

    if (!mobileWidth.matches) {
      login.style.maxHeight = null;
      window.removeEventListener('click', outsideClickListener);
    }

    login.classList.remove('login--show');
    window.removeEventListener('keydown', onEcsPress);
  };

  const togglePopup = () => {
    if (login.classList.contains('login--show')) {
      closePopup();
    } else {
      openPopup();
    }
  };

  const onEcsPress = (evt) => {
    if (evt.keyCode === KeyCode.ESC) {
      evt.preventDefault();
      closePopup();
    }
  };


  const outsideClickListener = (evt) => {
    if (!login.contains(evt.target) && !loginShowBtn.contains(evt.target)) {
      closePopup();
    }
  };

  const checkScreenWidth = () => {
    let currentWidth = document.documentElement.clientWidth;

    if (screenWidth !== currentWidth) {
      closePopup();
      screenWidth = currentWidth;
    }
  };

  if (login) {

    try {
      storage.email = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    loginShowBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      togglePopup();

      userEmail.value = storage.email;
      userEmail.focus();
    });

    forgotPasswordLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });

    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('email', userEmail.value);
      }
    });

    window.addEventListener('resize', checkScreenWidth);

    showPasswordBtn.addEventListener('click', () => {
      showPasswordBtn.classList.toggle('login__show-password--active');

      if (inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text');
      } else {
        inputPassword.setAttribute('type', 'password');
      }
    });
  }
};

export {initLogin};
