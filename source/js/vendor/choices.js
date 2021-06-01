import Choices from 'choices.js';


const choiceHandler = (choiceElement) => {
  choiceElement.containerInner.element.addEventListener('click', (evt) => {
    if (evt.target.closest('.is-open')) {
      choiceElement.hideDropdown();
    }
  });

  choiceElement.passedElement.element.addEventListener(
    'choice',
    (evt) => {
      const selectedValues = choiceElement.getValue();
      const selectedValue = selectedValues.find((selectedValue) => selectedValue.choiceId === evt.detail.choice.id)
      if (selectedValue) {
        setTimeout(() => choiceElement.removeActiveItemsByValue(selectedValue.value), 10)
      }
    },
    false,
  );
}

document.querySelectorAll('.input-dropdown')
  .forEach((item) => {
    const choiceElement = new Choices(item, {
      searchEnabled: false,
      itemSelectText: '',
      removeItems: false,
      renderSelectedChoices: 'always',
    });
    choiceHandler(choiceElement);
  });
