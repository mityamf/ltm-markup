const topBar = document.querySelector('.header__top');
const header = document.querySelector('header');

const stickNav = () => {

  let scrollPos = window.pageYOffset;

  const scroll = () => {
    const topBarGap = topBar.offsetHeight;

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > scrollPos) {
      header.style.transform = 'translateY(-' + topBarGap + 'px)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    scrollPos = st <= 0 ? 0 : st;
  };

  window.addEventListener('resize', scroll);
  window.addEventListener('scroll', scroll);
};

export {stickNav};
