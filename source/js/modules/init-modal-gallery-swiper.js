import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const initModalGallerySwiper = () => {

  const modalGalleryBtns = document.querySelectorAll('[data-modal="gallery"]');

  let modalSwiper = null;
  let modalMiniSwiper = null;

  const openModal = (modal) => {
    modal.classList.add('modal--active');
    disableScrolling();
    setModalListeners(modal);
  };

  const closeModal = (modal, preventScrollLock) => {
    modal.classList.remove('modal--active');
    destroySwiper(modal);

    if (!preventScrollLock) {
      setTimeout(enableScrolling, 300);
    }
  };

  const onEscPress = (evt, modal) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && modal.classList.contains('modal--active')) {
      evt.preventDefault();
      closeModal(modal, false);
    }
  };

  const setModalListeners = (modal) => {
    const overlay = modal.querySelector('.modal__overlay');
    const closeBtn = modal.querySelector('.modal__close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(modal, false);
      });
    }

    overlay.addEventListener('click', () => {
      closeModal(modal, false);
    });

    document.addEventListener('keydown', (evt) => {
      onEscPress(evt, modal);
    });
  };

  if (modalGalleryBtns.length) {
    modalGalleryBtns.forEach((btn) => {

      let block = btn.closest('.js-gallery');
      let modalBlock = block.querySelector('.modal--gallery');
      let modalSlider = modalBlock.querySelector('.modal-gallery__slider');
      let modalMiniSlider = modalBlock.querySelector('.modal-gallery__mini-slider');

      btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        let clickedSlide = evt.target.closest('[data-modal="gallery"]');
        let clickedSlideId = Number(clickedSlide.dataset.id);
        openModal(modalBlock);
        initSwiper(modalBlock, modalSlider, modalMiniSlider);
        modalSlider.swiper.slideToLoop(clickedSlideId - 1, 200);
      });
    });
  }

  const initSwiper = (modal, slider, miniSlider) => {

    if (modal.classList.contains('modal--active') && modalSwiper === null && modalMiniSwiper === null) {

      modalMiniSwiper = new Swiper(miniSlider, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true,
        slideToClickedSlide: true,
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

      modalSwiper = new Swiper(slider, {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.modal-gallery__btn-next',
          prevEl: '.modal-gallery__btn-prev',
        },
        thumbs: {
          swiper: modalMiniSwiper,
        },
      });
    }
  };

  const destroySwiper = (modal) => {

    if (!modal.classList.contains('modal--active') && modalSwiper !== null && modalMiniSwiper !== null) {

      modalSwiper.destroy(true, true);
      modalMiniSwiper.destroy(true, true);
      modalSwiper = null;
      modalMiniSwiper = null;
    }
  };
};

export {initModalGallerySwiper};

