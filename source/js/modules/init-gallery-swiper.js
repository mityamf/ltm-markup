const initGallerySwiper = () => {

  let gallerySwiper = null;

  let gallerySliders = document.querySelectorAll('.photo__slider');
  let breakpointWidth = 768;

  function initSwiper() {
    let screenWidth = window.innerWidth;
    if (screenWidth < breakpointWidth && gallerySwiper === null) {
      gallerySliders.forEach(function (gallerySlider) {
        gallerySwiper = new Swiper(gallerySlider, {
          navigation: {
            nextEl: '.photo__button-next',
            prevEl: '.photo__button-prev',
          },
        });
      });
    } else if (screenWidth > breakpointWidth - 1 && gallerySwiper !== null) {
      gallerySliders.forEach(function (gallerySlider) {
        gallerySlider.swiper.destroy(true, true);
        gallerySwiper = null;
      });
    }
  }

  initSwiper();

  window.addEventListener('resize', function () {
    initSwiper();
  });
};

export {initGallerySwiper};
