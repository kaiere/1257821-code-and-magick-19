'use strict';

// Сборник констант + рандомайзер

(function () {
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_AMOUNT = 4;
  var getRandomArrayIndex = function (arrayName) {
    return arrayName[Math.floor(Math.random() * arrayName.length)];
  };

  window.utils = {
  ENTER_KEY: ENTER_KEY,
  ESC_KEY: ESC_KEY,
  WIZARD_NAMES: WIZARD_NAMES,
  WIZARD_SURNAMES: WIZARD_SURNAMES,
  COAT_COLORS: COAT_COLORS,
  EYES_COLORS: EYES_COLORS,
  FIREBALL_COLORS: FIREBALL_COLORS,
  WIZARDS_AMOUNT: WIZARDS_AMOUNT,
  getRandomArrayIndex: getRandomArrayIndex
  };
})();
