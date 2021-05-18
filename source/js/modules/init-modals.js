import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');
const modalSubmission = document.querySelector('.modal--submission');
const modalSubmissionBtns = document.querySelectorAll('[data-modal="submission"]');
const modalChoices = document.querySelector('.modal--choices');
const modalChoicesBtns = document.querySelectorAll('[data-modal="choices"]');
const modalGallery = document.querySelector('.modal-gallery');
const modalGalleryBtns = document.querySelectorAll('[data-modal="gallery"]')

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalFeedback && modalFeedbackBtns.length) {
    setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
  if (modalSubmission && modalSubmissionBtns.length) {
    setupModal(modalSubmission, false, modalSubmissionBtns);
  }
  if (modalChoices && modalChoicesBtns.length) {
    setupModal(modalChoices, false, modalChoicesBtns);
  }
  if (modalGallery && modalGalleryBtns.length) {
    setupModal(modalGallery, false, modalGalleryBtns);
  }
};

export {initModals};
