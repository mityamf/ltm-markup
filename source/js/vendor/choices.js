import Choices from 'choices.js';


const choiceHandler = (choiceElement) => {
  choiceElement.containerInner.element.addEventListener('click', (evt) => {
    if (!choiceElement.wasOpened) {
      choiceElement.wasOpened = true;
      return
    }
    if (evt.target.closest('.is-open')) {
      choiceElement.hideDropdown();
      choiceElement.wasOpened = false;
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

const choices = Array.from(document.querySelectorAll('.input-dropdown'))
  .map((item) => {
    const choiceElement = new Choices(item, {
      searchEnabled: false,
      itemSelectText: '',
      removeItems: false,
      renderSelectedChoices: 'always',
    });
    choiceElement.wasOpened = false;
    choiceHandler(choiceElement);
    return choiceElement;
  });

document.documentElement.addEventListener('click', (evt) => {
  if (!evt.target.closest('.choices')) {
    choices.forEach((choice) => choice.wasOpened = false)
  }
})
