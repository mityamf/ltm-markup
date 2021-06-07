const buyerSwiper = () => {
  let statusSwiper = null;

  let statusSliders = document.querySelectorAll('.status-slider');
  let breakpointWidth = 768;

  function initSwiper() {
    let screenWidth = window.innerWidth;
    if (screenWidth < breakpointWidth && statusSwiper === null) {
      statusSliders.forEach(function (statusSlider) {
        statusSwiper = new Swiper(statusSlider, {
          navigation: {
            nextEl: '.status__button-next',
            prevEl: '.status__button-prev',
          },
          pagination: {
            el: '.status__pagination',
            clickable: true,
          },
        });
      });
    } else if (screenWidth > breakpointWidth - 1 && statusSwiper !== null) {
      statusSliders.forEach(function (statusSlider) {
        statusSlider.swiper.destroy(true, true);
        statusSwiper = null;
      });
    }
  }

  initSwiper();

  window.addEventListener('resize', function () {
    initSwiper();
  });
};

export {buyerSwiper};
