# koa-isajax

Express `req.xhr` equivalent for Koa 2 applications.
Middleware for Koa 2 that sets a boolean on the `ctx.state` on whether or not the request is and Ajax request.

This middleware is the equivalent to [Express `req.xhr`.](http://expressjs.com/en/api.html#req.xhr)

## Installation
`$ npm install koa-isajax --save`

## Options

`isajax(setVary)` accepts an argument `setVary` which is a String that defaults to `'X-Requested-With'`.  If you pass `false`, then `ctx.vary(setVary)` will not be called immediately.

This sets the `Vary` header so that AJAX and HTML responses on the same page do not conflict:

* <https://stackoverflow.com/questions/1975416/what-is-the-function-of-the-vary-accept-http-header/1975677#1975677>
* <https://stackoverflow.com/questions/9956255/chrome-displays-ajax-response-when-pressing-back-button/10117752#10117752>

## Example

```javascript
import Koa from 'koa';
import isajax from 'koa-isajax';

const app = new Koa();

app.use(isajax());
app.use(async (ctx) => {
    if (ctx.state.xhr) {
        // Ajax request.
    } else  {
        // Not ajax request.
    }
});

app.listen(3000);
```
