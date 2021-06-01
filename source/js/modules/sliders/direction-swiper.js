/* eslint-disable new-cap */
const directionSlider = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  let directionSwiper = new Swiper('.direction__swiper-block', {
    spaceBetween: 0,
    slidesPerGroup: 3,
    slidesPerView: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.direction__pagination',
      clickable: true,
    },
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
