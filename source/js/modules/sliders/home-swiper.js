const homeSwiper = () => {

  let homeSwiper = null;

  let homeSliders = document.querySelectorAll('.news-home__slider');
  let breakpointWidth = 768;

  function initSwiper() {
    let screenWidth = window.innerWidth;
    if (screenWidth < breakpointWidth && homeSwiper === null) {
      homeSliders.forEach(function (homeSlider) {
        homeSwiper = new Swiper(homeSlider, {
          navigation: {
            nextEl: '.news-home__button-next',
            prevEl: '.news-home__button-prev',
          },
          pagination: {
            el: '.news-home__pagination',
          },
        });
      });
    } else if (screenWidth > breakpointWidth - 1 && homeSwiper !== null) {
      homeSliders.forEach(function (homeSlider) {
        homeSlider.swiper.destroy(true, true);
        homeSwiper = null;
      });
    }
  }

  initSwiper();

  window.addEventListener('resize', function () {
    initSwiper();
  });
};

export {homeSwiper};
