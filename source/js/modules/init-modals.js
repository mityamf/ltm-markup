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
const modalGallery = document.querySelector('.modal--gallery');
const modalGalleryBtns = document.querySelectorAll('[data-modal="gallery"]');
const modalForgot = document.querySelector('.modal--forgot');
const modalForgotBtns = document.querySelectorAll('[data-modal="forgot"]');
const modalEditColleague = document.querySelector('.modal--edit-colleague');
const modalEditColleagueBtns = document.querySelectorAll('[data-modal="edit-colleague"]');
const modalEditProfile = document.querySelector('.modal--edit-profile');
const modalEditProfileBtns = document.querySelectorAll('[data-modal="edit-profile"]');
const modalAdminTabs = document.querySelector('.modal--admin-menu');
const modalAdminTabsBtns = document.querySelectorAll('[data-modal="admin-menu"]');
const modalMobileFilters = document.querySelector('.modal--mobile-filters');
const modalMobileFiltersBtns = document.querySelectorAll('[data-modal="mobile-filters"]');

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
  if (modalForgot && modalForgotBtns.length) {
    setupModal(modalForgot, false, modalForgotBtns);
  }
  if (modalEditColleague && modalEditColleagueBtns.length) {
    setupModal(modalEditColleague, false, modalEditColleagueBtns);
  }
  if (modalEditProfile && modalEditProfileBtns.length) {
    setupModal(modalEditProfile, false, modalEditProfileBtns);
  }
  if (modalAdminTabs && modalAdminTabsBtns.length) {
    setupModal(modalAdminTabs, false, modalAdminTabsBtns);
  }
  if (modalMobileFilters && modalMobileFiltersBtns.length) {
    setupModal(modalMobileFilters, false, modalMobileFiltersBtns);
  }
};

export {initModals};
