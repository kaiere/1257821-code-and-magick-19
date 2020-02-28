'use strict';

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;
var ENTER_KEY = 'Enter';
var ESC_KEY = 'Escape';

var getRandomArrayIndex = function (arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
};

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getWizards = function (wizardsAmount) {
  var wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    wizards.push({
      name: getRandomArrayIndex(WIZARD_NAMES) + ' ' + getRandomArrayIndex(WIZARD_SURNAMES),
      coatColor: getRandomArrayIndex(COAT_COLORS),
      eyesColor: getRandomArrayIndex(EYES_COLORS)
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
  var wizards = getWizards(WIZARDS_AMOUNT);
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

var getElementColor = function (array, element, input) {
  var currentColor = getRandomArrayIndex(array);
  if (element === wizardFireball) {
    element.style.backgroundColor = currentColor;
  }
  element.style.fill = currentColor;
  input.value = currentColor;
};

var onCoatClick = function () {
  getElementColor(COAT_COLORS, wizardCoat, inputCoat);
};

var onEyesClick = function () {
  getElementColor(EYES_COLORS, wizardEyes, inputEyes);
};

var onFireballClick = function () {
  getElementColor(FIREBALL_COLORS, wizardFireball, inputFireball);
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
