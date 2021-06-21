const toggleGallery = () => {

  const toggleBtn = document.querySelector('.toggle__button');

  if (toggleBtn) {

    const enableSection = (section) => {
      section.style.display = 'block';
    };

    const disableSection = (section) => {
      section.style.display = 'none';
    };

    const toggleSections = (section1, section2) => {
      section1.style.display = 'none';
      section2.style.display = 'block';
    };

    const changeBlock = () => {
      const toggleBlock = document.querySelector('.toggle');
      const photoSection = document.querySelector('.js-photo');
      const videoSection = document.querySelector('.js-video');
      const breakpointWidth = window.matchMedia('(max-width:767px)');

      const onToggleBtnClick = (evt) => {
        if (evt.currentTarget.checked) {
          toggleSections(photoSection, videoSection);
          toggleBlock.classList.add('toggle--checked');
        } else {
          toggleSections(videoSection, photoSection);
          toggleBlock.classList.remove('toggle--checked');
        }
      };

      if (breakpointWidth.matches) {
        if (toggleBtn.checked) {
          disableSection(photoSection);
          enableSection(videoSection);
        } else {
          disableSection(videoSection);
          enableSection(photoSection);
        }
        toggleBtn.addEventListener('change', onToggleBtnClick);
      } else {
        enableSection(photoSection);
        enableSection(videoSection);
        toggleBtn.removeEventListener('change', onToggleBtnClick);
      }
    };

    window.addEventListener('resize', changeBlock);
    changeBlock();
  }
};

export {toggleGallery};
