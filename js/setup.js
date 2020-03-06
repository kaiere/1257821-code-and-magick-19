'use strict';

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

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var inputCoat = userDialog.querySelector('[name=coat-color]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputEyes = userDialog.querySelector('[name=eyes-color]');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var inputFireball = wizardFireball.querySelector('[name=fireball-color]');

var changeElementColor = function (array, element, input) {
  var currentColor = window.utils.getRandomArrayIndex(array);
  element.style.fill = currentColor;
  input.value = currentColor;
};

var changeFireballColor = function (array, element, input) {
  var currentColor = window.utils.getRandomArrayIndex(array);
  element.style.background = currentColor;
  element.style.fill = currentColor;
  input.value = currentColor;
};

var onCoatClick = function () {
  changeElementColor(window.utils.COAT_COLORS, wizardCoat, inputCoat);
};

var onEyesClick = function () {
  changeElementColor(window.utils.EYES_COLORS, wizardEyes, inputEyes);
};

var onFireballClick = function () {
  changeFireballColor(window.utils.FIREBALL_COLORS, wizardFireball, inputFireball);
};

var openWindow = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onWindowEscPress);
  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  wizardFireball.addEventListener('click', onFireballClick);
};

var closeWindow = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onWindowEscPress);
  wizardCoat.removeEventListener('click', onCoatClick);
  wizardEyes.removeEventListener('click', onEyesClick);
  wizardFireball.removeEventListener('click', onFireballClick);
};

var onWindowEscPress = function (evt) {
  if (evt.key === window.utils.ESC_KEY && setupUserName !== document.activeElement) {
    closeWindow();
  }
};

setupOpen.addEventListener('click', function () {
  openWindow();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === window.utils.ENTER_KEY) {
    openWindow();
  }
});

setupClose.addEventListener('click', function () {
  closeWindow();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === window.utils.ENTER_KEY) {
    userDialog.classList.add('hidden');
  }
});
