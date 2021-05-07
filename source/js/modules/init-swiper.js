const initSwiper = () => {
  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
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
  });
};

export {initSwiper};
