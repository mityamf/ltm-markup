const onMoreButtonHandler = () => {
  const contentBlock = document.querySelector('.about__text-wrapper--mobile');
  const showMoreBlock = document.querySelector('.open-more');

  contentBlock.classList.add('about__text-wrapper--visible');
  showMoreBlock.remove();
};

const initMoreButton = () => {
  const showMoreButton = document.querySelector('.open-more__button');
  showMoreButton.addEventListener('click', onMoreButtonHandler);
};

export {initMoreButton};
