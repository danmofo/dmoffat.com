(function() {

  'use strict';

  function $(selector) {
    return document.querySelector(selector);
  }

  var mobileNavigationToggle = $('.js-mobile-navigation-toggle');
  var mobileNavigationContent = $('.js-navigation-content');

  mobileNavigationToggle.addEventListener('click', onToggleMobileNavigation);

  function onToggleMobileNavigation(event) {
    mobileNavigationContent.classList.toggle('is-active');
  }

})();
