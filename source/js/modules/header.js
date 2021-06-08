const stickNav = () => {

  const header = document.querySelector('header');

  if (header) {

    const topBar = header.querySelector('.header__top');
    let breakpointWidth = 767;

    let scrollPos = window.pageYOffset;

    const getTopBarHeight = () => topBar.offsetHeight;

    const scroll = () => {

      let st = window.pageYOffset || document.documentElement.scrollTop;

      header.style.transform = (st > scrollPos) ? `translateY(-${getTopBarHeight()}px)` : 'translateY(0)';

      scrollPos = st <= 0 ? 0 : st;
    };

    const checkScreenWidth = () => {
      let screenWidth = window.innerWidth;

      if (screenWidth > breakpointWidth) {
        getTopBarHeight();
      }
    };

    getTopBarHeight();
    window.addEventListener('resize', checkScreenWidth);
    window.addEventListener('resize', scroll);
    window.addEventListener('scroll', scroll);
  }
};

export {stickNav};
