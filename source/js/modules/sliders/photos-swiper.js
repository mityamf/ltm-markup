const photosSwiper = () => {
  return new Swiper('.direction--photo-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.direction__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.direction__arrow--right',
      prevEl: '.direction__arrow--left',
    },
  });
};

export {photosSwiper};
