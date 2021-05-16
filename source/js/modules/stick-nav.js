const topBar = document.querySelector('.header__top');
const header = document.querySelector('header');

const stickNav = () => {

  let scrollPos = window.pageYOffset;

  const getTopBarHeight = () => {
    const topBarGap = topBar.offsetHeight;
    return topBarGap;
  };

  const scroll = () => {

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > scrollPos) {
      header.style.transform = 'translateY(-' + getTopBarHeight() + 'px)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    scrollPos = st <= 0 ? 0 : st;
  };

  getTopBarHeight();
  window.addEventListener('resize', getTopBarHeight);
  window.addEventListener('resize', scroll);
  window.addEventListener('scroll', scroll);
};

export {stickNav};
