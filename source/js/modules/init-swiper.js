const initSwiper = () => {
  /* eslint-disable */
  let swiper = new Swiper('.direction__swiper-block', {
    spaceBetween: 0,
    slidesPerGroup: 3,
    slidesPerView: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.direction__arrow--right',
      prevEl: '.direction__arrow--left',
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });

  //  let swiper1 = new Swiper(".mySwiper1", {
  //  slidesPerView: 1,
  //  spaceBetween: 16.5,
  //  loop: true,
  //  pagination: {
  //    el: ".swiper-pagination1",
  //    clickable: true,
  //  },
  //  navigation: {
  //    nextEl: ".swiper-button-next1",
  //    prevEl: ".swiper-button-prev1",
  //  },
  //  });
};

export {initSwiper};
