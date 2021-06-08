const initHeader = () => {

  const header = document.querySelector('header');

  if (header) {

    const topBar = header.querySelector('.header__top');

    let scrollPos = window.pageYOffset;

    let screenWidth = document.documentElement.clientWidth;

    const getTopBarHeight = () => topBar.offsetHeight;

    const scroll = () => {

      let st = window.pageYOffset || document.documentElement.scrollTop;

      header.style.transform = (st > scrollPos) ? `translateY(-${getTopBarHeight()}px)` : null;

      scrollPos = st <= 0 ? 0 : st;
    };

    const checkScreenWidth = () => {
      let currentWidth = document.documentElement.clientWidth;

      if (screenWidth !== currentWidth) {
        getTopBarHeight();
      }
    };

    getTopBarHeight();

    window.addEventListener('resize', function () {
      checkScreenWidth();
      scroll();
    });

    window.addEventListener('scroll', scroll);
  }
};

export {initHeader};
