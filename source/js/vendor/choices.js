import Choices from 'choices.js';

Choices.prototype._onMouseDownOld = Choices.prototype._onMouseDown;
Choices.prototype._onMouseDown = function(evt) {
  if (evt.target.dataset.value && evt.target.dataset.value.toLowerCase() === 'SelectAll'.toLowerCase()) {
    if (this.getValue().length < this._store.choices.length - 1) {
      const elements = [];
      this.removeActiveItems();
      for (let choice of this._store.choices) {
        choice.choiceId = choice.id
        if (choice.value.toLowerCase() === 'SelectAll'.toLowerCase()) {
          this._addItem(choice);
        } else {
          elements.push(choice);
        }
      }
      elements.forEach((element) => this._addItem(element));
    } else {
      this.removeActiveItems();
      for (let choice of this._store.choices) {
        choice.choiceId = choice.id
        if (choice.value.toLowerCase() === 'SelectAll'.toLowerCase()) {
          this._addItem(choice);
        }
      }
    }
    return
  }
  Choices.prototype._onMouseDownOld.call(this, evt)
}

const setSelectAll = (choices) => {
  for (let choice of choices._store.choices) {
    if (choice.value.toLowerCase() === 'SelectAll'.toLowerCase()) {
      choice.choiceId = choice.id
      choices._addItem(choice);
      return;
    }
  }
}

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
    setSelectAll(choiceElement);
    return choiceElement;
  });

document.documentElement.addEventListener('click', (evt) => {
  if (!evt.target.closest('.choices')) {
    choices.forEach((choice) => choice.wasOpened = false)
  }
})
