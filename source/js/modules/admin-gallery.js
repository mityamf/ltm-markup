export const initResizePhotos = () => {
  window.addEventListener('resize', () => {
    const images = Array.from(document.querySelectorAll('.hotel-photos__item img'));
    const firstElementArea = images[0].y + images[0].height + 100;
    images.forEach((img) => {
      if (img.y + img.height > firstElementArea) {
        img.closest('.hotel-photos__item').classList.add('hotel-photos__item--small');
      } else {
        img.closest('.hotel-photos__item').classList.remove('hotel-photos__item--small');
      }
    });
    const upload = document.querySelector('.hotel-photos__item--upload');
    if (upload.offsetTop + upload.offsetHeight > firstElementArea) {
      upload.classList.add('hotel-photos__item--small');
    } else {
      upload.classList.remove('hotel-photos__item--small');
    }
  });
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 1);
};
