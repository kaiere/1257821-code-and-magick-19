'use strict';

// Отрисовка братьев Пендальфа
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getWizards = function (wizardsAmount) {
    var wizards = [];
    for (var i = 0; i < wizardsAmount; i++) {
      wizards.push({
        name: window.utils.getRandomArrayIndex(window.utils.WIZARD_NAMES) + ' ' + window.utils.getRandomArrayIndex(window.utils.WIZARD_SURNAMES),
        coatColor: window.utils.getRandomArrayIndex(window.utils.COAT_COLORS),
        eyesColor: window.utils.getRandomArrayIndex(window.utils.EYES_COLORS)
      });
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addWizards = function () {
    var wizards = getWizards(window.utils.WIZARDS_AMOUNT);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  addWizards();
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
