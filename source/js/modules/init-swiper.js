const initSwiper = () => {
  /* eslint-disable */
  let swiper = new Swiper('.mySwiper', {
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1280: {
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
