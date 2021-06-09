const initHeader = () => {

  const header = document.querySelector('header');

  if (header) {

    const topBar = header.querySelector('.header__top');
    const mobileWidth = window.matchMedia('(max-width:767px)');

    let scrollPos = 0;

    let screenWidth = document.documentElement.clientWidth;

    const getTopBarHeight = () => topBar.offsetHeight;

    const scroll = () => {

      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (!mobileWidth.matches) {
        header.style.transform = (st > scrollPos) ? `translateY(-${getTopBarHeight()}px)` : null;
        scrollPos = st;
      }
    };

    const checkScreenWidth = () => {
      let currentWidth = document.documentElement.clientWidth;

      if (screenWidth !== currentWidth) {
        getTopBarHeight();
        scroll();
        screenWidth = currentWidth;
      }
    };

    getTopBarHeight();

    window.addEventListener('resize', checkScreenWidth);
    window.addEventListener('scroll', scroll);
  }
};

export {initHeader};
