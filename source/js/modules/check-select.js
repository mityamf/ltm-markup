const onCheckSelectHandler = () => {
  const checkboxSelect = document.querySelector('#Global');
  const contentBlock = document.querySelector('.form-reg__select-avaliable');
  if (checkboxSelect.checked) {
    contentBlock.classList.add('form-reg__hidden');
  } else {
    contentBlock.classList.remove('form-reg__hidden');
  }
};

const initCheckSelect = () => {
  const checkboxSelect = document.querySelector('#Global');
  if (checkboxSelect) {
    checkboxSelect.addEventListener('change', onCheckSelectHandler);
  }
};

export {initCheckSelect};
