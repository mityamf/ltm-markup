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

const onScrollPageHandler = () => {
  const scrollFixedBtn = document.querySelector('.up-button--fixed');

  if (window.pageYOffset >= window.innerHeight) {
    scrollFixedBtn.classList.add('up-button--visible');
  } else {
    scrollFixedBtn.classList.remove('up-button--visible');
  }
};

const initScrollButton = () => {
  window.addEventListener('scroll', onScrollPageHandler);
};

export {scrollToTop, initScrollButton};


