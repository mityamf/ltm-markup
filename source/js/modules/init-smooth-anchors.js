const initSmoothAnchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  if (anchors) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      });
    }
  }
};

export {initSmoothAnchors};

