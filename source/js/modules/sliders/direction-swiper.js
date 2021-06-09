const directionSlider = () => {
  return new Swiper('.direction__swiper-block', {
    spaceBetween: 15,
    slidesPerGroup: 1,
    slidesPerView: 6,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.direction__arrow--right',
      prevEl: '.direction__arrow--left',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });
};

export {directionSlider};
