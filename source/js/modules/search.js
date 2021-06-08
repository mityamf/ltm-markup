const initSearch = () => {
  const ESC = 27;
  const searchElement = document.querySelector('.header__search');
  const searchButton = document.querySelector('.js-search-button');

  if (searchElement) {
    const searchInput = searchElement.querySelector('.search-input__input');

    const openSearch = () => {
      searchElement.classList.remove('header__search--hidden');
      searchInput.focus();
      window.addEventListener('keydown', onEcsPress);
    };

    const closeSearch = () => {
      searchElement.classList.add('header__search--hidden');
      window.removeEventListener('keydown', onEcsPress);
    };

    const toggleSearch = () => {
      if (searchElement.classList.contains('header__search--hidden')) {
        openSearch();
      } else {
        closeSearch();
      }
    };

    const onEcsPress = (evt) => {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        closeSearch();
      }
    };

    const hideOnClickOutside = () => {
      const outsideClickListener = (evt) => {
        if (!searchElement.contains(evt.target) && !searchButton.contains(evt.target)) {
          closeSearch();
          removeClickListener();
        }
      };

      const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener);
      };

      window.addEventListener('click', outsideClickListener);
    };

    hideOnClickOutside();
    searchButton.addEventListener('click', toggleSearch);
    window.addEventListener('resize', closeSearch);
  }
};

export {initSearch};
