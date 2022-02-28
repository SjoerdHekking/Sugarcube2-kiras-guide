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

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
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
  });
});

