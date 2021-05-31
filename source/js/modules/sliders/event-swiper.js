const eventSwiper = () => {
  return new Swiper('.direction__slider--event', {
    spaceBetween: 0,
    slidesPerGroup: 1,
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
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    on: {
      init() {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 1);
      },
      resize() {
        if (this.isBeginning && this.isEnd) {
          this.navigation.prevEl.setAttribute('hidden', 'true');
          this.navigation.nextEl.setAttribute('hidden', 'true');
          this.pagination.destroy();
        } else {
          this.navigation.prevEl.removeAttribute('hidden');
          this.navigation.nextEl.removeAttribute('hidden');
          this.pagination.init();
        }
      },
    },
  });
};

export {eventSwiper};
