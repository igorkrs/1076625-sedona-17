'use strict';

var
  mainMenuToggle = document.querySelector('.main-nav__toggle'),
  mainMenu = document.querySelector('.main-nav');

mainMenu.classList.remove('main-nav--nojs');

mainMenuToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-nav--closed')) {
    mainMenu.classList.remove('main-nav--closed');
    mainMenu.classList.add('main-nav--opened');
    mainMenuToggle.classList.add('main-nav__toggle--closed');
  } else {
    mainMenu.classList.remove('main-nav--opened');
    mainMenu.classList.add('main-nav--closed');
    mainMenuToggle.classList.remove('main-nav__toggle--closed');
  }
});
