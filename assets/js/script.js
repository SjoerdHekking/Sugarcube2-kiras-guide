'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true,

  });

  /* Test for device dark mode */
  window.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  window.toggleCodeBoxes = (isDark) => {
    if (isDark) {
      var pre = document.getElementsByTagName('pre'),
          len = pre !== null ? pre.length : 0,
          i = 0;
      for(i; i < len; i++) {
          pre[i].className += " code-dark"; 
      }
    } else {
      var elements = document.getElementsByClassName('code-dark');
      while(elements.length > 0){
          elements[0].classList.remove('code-dark');
      }
    }
  }
  toggleCodeBoxes(darkMode);

  window.toggleMode = (changer) => {
    if (changer) {darkMode = !darkMode};
    document.body.classList[darkMode ? 'add' : 'remove']('darkMode');
    document.getElementById('dModeButton').innerText = darkMode ? 'Light mode' : 'Dark mode';
  };
  toggleMode();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    toggleCodeBoxes(event.matches);
  });

});

