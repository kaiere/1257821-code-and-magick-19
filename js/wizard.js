'use strict';

(function () {

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var inputCoatColor = userDialog.querySelector('input[name="coat-color"]');
  var inputEyesColor = userDialog.querySelector('input[name="eyes-color"]');
  var inputFireballColor = wizardFireball.querySelector('input[name="fireball-color"]');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardEyes.addEventListener('click', function () {
    var color = window.utils.getRandomArrayIndex(EYES_COLORS);
    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
    wizard.onEyesChange(color);
  });

  wizardCoat.addEventListener('click', function () {
    var color = window.utils.getRandomArrayIndex(COAT_COLORS);
    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
    wizard.onCoatChange(color);
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.utils.getRandomArrayIndex(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = color;
    inputFireballColor.value = color;
  });

  window.wizard = wizard;
})();
