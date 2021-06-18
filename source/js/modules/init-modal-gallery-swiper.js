import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const initModalGallerySwiper = () => {

  const modalGalleryBtns = document.querySelectorAll('[data-modal="gallery"]');
  const modalMultipleGalBtns = document.querySelectorAll('[data-modal="gallery-multiple"]');

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

  if (modalMultipleGalBtns.length) {
    modalMultipleGalBtns.forEach((btn) => {

      let block = btn.closest('.gallery__block-item');
      let modalBlock = block.querySelector('.modal--gallery');
      let modalSlider = modalBlock.querySelector('.modal-gallery__slider');
      let modalMiniSlider = modalBlock.querySelector('.modal-gallery__mini-slider');

      btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal(modalBlock);
        initSwiper(modalBlock, modalSlider, modalMiniSlider);
      });
    });
  }

  if (modalGalleryBtns.length) {
    modalGalleryBtns.forEach((btn) => {

      const modalSlider = document.querySelector('.modal-gallery__slider');
      const modalMiniSlider = document.querySelector('.modal-gallery__mini-slider');
      const modalGallery = document.querySelector('.modal--gallery');

      btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal(modalGallery);
        initSwiper(modalGallery, modalSlider, modalMiniSlider);
      });
    });
  }


  const initSwiper = (modal, slider, miniSlider) => {

    if (modal.classList.contains('modal--active') && modalSwiper === null && modalMiniSwiper === null) {

      modalSwiper = new Swiper(slider, {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.modal-gallery__btn-next',
          prevEl: '.modal-gallery__btn-prev',
        },
        thumbs: {
          swiper: modalMiniSwiper,
        },
      });

      modalMiniSwiper = new Swiper(miniSlider, {
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

