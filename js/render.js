'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var similarList = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');

  // Создание одного мага
  var createOneWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  // Отрисовка массива магов
  var renderWizard = function (wizards) {
    var counter = 4;
    var fragment = document.createDocumentFragment();
    similarList.innerHTML = '';
    if (wizards.length < 4) {
      counter = wizards.length;
    }
    for (var i = 0; i < counter; i++) {
      fragment.appendChild(createOneWizard(wizards[i]));
    }
    // Отрисовка похожих персонажей
    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };

  window.render = {
    renderWizard: renderWizard
  };
})();
