const initLogin = () => {
  const login = document.querySelector('.login');
  const loginShowBtn = document.querySelector('.header__link--sign-in');
  const showPasswordBtn = document.querySelector('.login__show-password');
  const inputPassword = document.querySelector('.login__input-password');
  const form = document.querySelector('.login__form');
  const forgotPasswordLink = document.querySelector('.login__forgot');
  const userEmail = document.querySelector('#login-email');
  const isStorageSupport = true;
  const storage = {};
  const KeyCode = {
    ESC: 27,
  };

  const openPopup = () => {
    login.classList.add('login--show');
  };

  const closePopup = () => {
    login.classList.remove('login--show');
  };

  try {
    storage.email = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  if (login) {
    loginShowBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      login.classList.toggle('login--show');

      userEmail.value = storage.email;
      userEmail.focus();
    });

    forgotPasswordLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    })

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

    login.addEventListener('click', function (evt) {
      if (evt.target == login) {
        closePopup();
      }
    });
  }

  showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('login__show-password--active');

    if (inputPassword.getAttribute('type') === 'password') {
      inputPassword.setAttribute('type', 'text');
    } else {
      inputPassword.setAttribute('type', 'password');
    }
  })
}

export {initLogin};
