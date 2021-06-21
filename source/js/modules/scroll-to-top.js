const scrollToTop = () => {

  const scrollUpBtns = document.querySelectorAll('.up-button');

  if (scrollUpBtns.length) {

    let backToTop = (evt) => {
      if (window.pageYOffset > 0) {
        evt.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    for (let scrollUpBtn of scrollUpBtns) {
      scrollUpBtn.addEventListener('click', backToTop);
    }
  }
};

export {scrollToTop};
