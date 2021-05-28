const initModalGallerySwiper = () => {
  const modalSlider = document.querySelector(".modal-gallery__slider");
  const modalMiniSlider = document.querySelector(".modal-gallery__mini-slider");

  const miniSlider = new Swiper(modalMiniSlider, {
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 10,
      },
      1300: {
        spaceBetween: 16,
        slidesPerView: 12,
      },
    },
  });

  if (modalSlider) {
    new Swiper(modalSlider, {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".modal-gallery__btn-next",
        prevEl: ".modal-gallery__btn-prev",
      },
      thumbs: {
        swiper: miniSlider,
      },
    });
  }
};

export {initModalGallerySwiper};
