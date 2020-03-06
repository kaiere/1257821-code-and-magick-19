'use strict';

// Перемещение окна

(function () {
  var userDialog = document.querySelector('.setup');
  var upload = document.querySelector('.upload');

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;
})();
