const toggleGallery = () => {

  const toggleBtn = document.querySelector('.toggle__button');

  if (toggleBtn) {

    const changeBlock = () => {
      const toggleBlock = document.querySelector('.toggle');
      const photoSection = document.querySelector('.gallery__section--photo');
      const videoSection = document.querySelector('.gallery__section--video');
      const breakpointWidth = window.matchMedia('(max-width:767px)');

      if (breakpointWidth.matches) {
        toggleBtn.checked = false;
        videoSection.style.display = 'none';

        toggleBtn.addEventListener('change', (evt) => {
          if (evt.currentTarget.checked) {
            photoSection.style.display = 'none';
            videoSection.style.display = 'block';
            toggleBlock.classList.add('toggle--checked');
          } else {
            photoSection.style.display = 'block';
            videoSection.style.display = 'none';
            toggleBlock.classList.remove('toggle--checked');
          }
        });
      } else {
        photoSection.style.display = 'block';
        videoSection.style.display = 'block';
      }
    };

    window.addEventListener('resize', changeBlock);
    changeBlock();
  }
};

export {toggleGallery};
