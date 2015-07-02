redraw-dom
===

Forces the browser to synchronously redraw a DOM node.

Anytime you've got some weird bug with the browsing not updatig the look of your element, you might need to force a repaint/redraw. This snippet will do the trick!

Before using this, you might want to try the `backface-visibility: hidden;` hack or using `will-change` (as seen [here](https://dev.opera.com/articles/css-will-change-property/)) since this is the "official" way to go.

## API

- `redraw(el, display)`

redraw the `el` element (must be a DOM node). `display` is the display style you want restored on the element (defaults to `block`).

## Example
```
var redraw = require('redraw-dom');

var el = document.querySelector('.el-redraw');
redraw(el);

el.style.display = 'inline';
redraw(el, 'inline'); // Preserve the inline display

```
