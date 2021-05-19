const regSwiper = () => {

  let registrationSwiper = null;

  let regSliders = document.querySelectorAll('.adoption__slider');
  let breakpointWidth = 768;

  function initSwiper() {
    let screenWidth = window.innerWidth;
    if (screenWidth < breakpointWidth && registrationSwiper === null) {
      regSliders.forEach(function (regSlider) {
        registrationSwiper = new Swiper(regSlider, {
          pagination: {
            el: '.adoption__pagination',
            clickable: true,
          },
        });
      });
    } else if (screenWidth > breakpointWidth - 1 && registrationSwiper !== null) {
      regSliders.forEach(function (regSlider) {
        regSlider.swiper.destroy(true, true);
        registrationSwiper = null;
      });
    }
  }

  initSwiper();

  window.addEventListener('resize', function () {
    initSwiper();
  });
};

export {regSwiper};
