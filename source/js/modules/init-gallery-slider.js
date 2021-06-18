const initGallerySlider = () => {

  let gallerySlider = null;

  let gallerySlidersBlocks = document.querySelectorAll('.photo__slider');
  let breakpointWidth = 768;

  const initSwiper = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth < breakpointWidth && gallerySlider === null) {
      gallerySlidersBlocks.forEach(function (gallerySliderBlock) {
        gallerySlider = new Swiper(gallerySliderBlock, {
          navigation: {
            nextEl: '.photo__button-next',
            prevEl: '.photo__button-prev',
          },
          pagination: {
            el: '.photo__pagination',
            type: 'bullets',
            clickable: true,
          },
        });
      });
    } else if (screenWidth > breakpointWidth - 1 && gallerySlider !== null) {
      gallerySlidersBlocks.forEach(function (gallerySliderBlock) {
        gallerySliderBlock.swiper.destroy(true, true);
        gallerySlider = null;
      });
    }
  };

  initSwiper();

  window.addEventListener('resize', function () {
    initSwiper();
  });
};

export {initGallerySlider};
