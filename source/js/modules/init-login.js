const initLogin = () => {
  const login = document.querySelector('.login');
  const loginShowBtn = document.querySelector('.header__link--sign-in');
  const showPasswordBtn = login.querySelector('.login__show-password');
  const inputPassword = login.querySelector('.login__input-password');
  const form = login.querySelector('.login__form');
  const forgotPasswordLink = login.querySelector('.login__forgot');
  const userEmail = login.querySelector('#login-email');
  const mobileWidth = window.matchMedia('(max-width:767px)');
  const isStorageSupport = true;
  const storage = {};
  const KeyCode = {
    ESC: 27,
  };

  const openPopup = () => {
    if (!mobileWidth.matches) {
      login.style.maxHeight = login.scrollHeight + 'px';
    }
    login.classList.add('login--show');
  };

  const closePopup = () => {
    login.style.maxHeight = null;
    login.classList.remove('login--show');
  };

  const togglePopup = () => {
    if (login.classList.contains('login--show')) {
      closePopup();
    } else {
      openPopup();
    }
  };

  const hideOnClickOutside = () => {
    const outsideClickListener = (evt) => {
      if (!login.contains(evt.target) && !loginShowBtn.contains(evt.target)) {
        closePopup();
        removeClickListener();
      }
    };

    const removeClickListener = () => {
      document.removeEventListener('click', outsideClickListener);
    };

    window.addEventListener('click', outsideClickListener);
  };

  try {
    storage.email = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  if (login) {

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

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === KeyCode.ESC) {
        evt.preventDefault();
        if (login.classList.contains('login--show')) {
          closePopup();
        }
      }
    });

    hideOnClickOutside();
  }

  showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('login__show-password--active');

    if (inputPassword.getAttribute('type') === 'password') {
      inputPassword.setAttribute('type', 'text');
    } else {
      inputPassword.setAttribute('type', 'password');
    }
  });
};

export {initLogin};
