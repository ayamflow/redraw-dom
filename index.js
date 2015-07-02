'use strict';

/*
    As seen in http://stackoverflow.com/a/3485654
*/

module.exports = function redraw(el, display) {
  el.style.display = 'none';
  el.offsetHeight;
  el.style.display = display || '';
}