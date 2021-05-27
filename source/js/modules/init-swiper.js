const initSwiper = () => {
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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.direction__arrow--right',
      prevEl: '.direction__arrow--left',
    }
  });
};

export {initSwiper};
