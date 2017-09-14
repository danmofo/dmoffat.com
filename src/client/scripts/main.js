(function() {

  'use strict';

  var debounce = require('lodash.debounce');

  function $(selector) {
    return document.querySelector(selector);
  }

  var mobileNavigationToggle = $('.js-mobile-navigation-toggle');
  var mobileNavigationContent = $('.js-navigation-content');

  mobileNavigationToggle.addEventListener('click', onToggleMobileNavigation);

  var header = $('.js-header');

  window.addEventListener('scroll', debounce(function(event) {

    if(screenIsTablet() || document.body.scrollTop > 0) {
        header.classList.add('is-visible');
    } else {
        header.classList.remove('is-visible');
    }
  }, 200));

  function screenIsTablet() {
    return window.innerWidth >= 480;
  }

  function onToggleMobileNavigation(event) {
    mobileNavigationContent.classList.toggle('is-active');
  }

})();
