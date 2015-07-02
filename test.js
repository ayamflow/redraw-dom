'use strict';

var redraw = require('./index');
var test = require('prova');

test('The display should be preserved', function(assert) {
    var inline = 'inline';
    var el = document.createElement('div');
    el.style.display = inline;

    redraw(el, inline);
    assert.equals(el.style.display, inline);
    assert.end();
});