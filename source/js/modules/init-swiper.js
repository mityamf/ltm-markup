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

  new Swiper('.card-swiper', {
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
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
    },
    on: {
      init: function () {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 1);
      },
      resize: function () {
        console.log(this)
        if (this.isBeginning && this.isEnd) {
          this.navigation.prevEl.setAttribute("hidden", "true");
          this.navigation.nextEl.setAttribute("hidden", "true");
          this.pagination.destroy();
        } else {
          this.navigation.prevEl.removeAttribute("hidden");
          this.navigation.nextEl.removeAttribute("hidden");
          this.pagination.init();
        }
      }
    }
  });

  new Swiper('.event-swiper', {
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
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
      1024: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function () {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 1);
      },
      resize: function () {
        console.log(this)
        if (this.isBeginning && this.isEnd) {
          this.navigation.prevEl.setAttribute("hidden", "true");
          this.navigation.nextEl.setAttribute("hidden", "true");
          this.pagination.destroy();
        } else {
          this.navigation.prevEl.removeAttribute("hidden");
          this.navigation.nextEl.removeAttribute("hidden");
          this.pagination.init();
        }
      }
    }
  });

  new Swiper('.photos-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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
