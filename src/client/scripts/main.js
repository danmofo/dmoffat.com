(function() {

  'use strict';

  var sun = document.querySelector('.scene__sky');
  var header = document.querySelector('.website-header');

  setTimeout(function() {

    sun.classList.add('animation-moveInFromTop');

  }, 500);


  setTimeout(function() {

    header.classList.add('animation-moveInFromTop');

  }, 1000);

  // var viewportWidth = document.documentElement.clientWidth;

})();
