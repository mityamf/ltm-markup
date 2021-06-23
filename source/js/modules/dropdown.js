const dropdown = () => {
  const initDropdown = (blockClass, blockActiveClass, btnClass) => {
    const dropdowns = document.querySelectorAll('.' + blockClass);

    let activeBtn;

    dropdowns.forEach((block) => {
      const dropdownsBtn = block.querySelector('.' + btnClass);

      dropdownsBtn.addEventListener('click', () => {
        if (activeBtn !== dropdownsBtn) {
          dropdowns.forEach((el) => {
            el.classList.remove(blockActiveClass);
          });
        }

        block.classList.toggle(blockActiveClass);

        activeBtn = dropdownsBtn;
      });
    });
  };

  initDropdown('form-reg__dropdown', 'form-reg__dropdown--open', 'form-reg__btn', 'form-reg__overlay');
};

export {dropdown};
