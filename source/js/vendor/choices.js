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
      searchEnabled: true,
      itemSelectText: '',
      removeItems: false,
      renderSelectedChoices: 'always',
      placeholder: true,
      placeholderValue: "mmj3e34r43r4rr23r23d"
    });
    choiceHandler(choiceElement);
  });
