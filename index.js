'use strict';

module.exports = function isajax(setVary = 'X-Requested-With') {
  return function _isajax(context, next) {
    // <https://stackoverflow.com/questions/9956255/chrome-displays-ajax-response-when-pressing-back-button/10117752#10117752>
    // <https://stackoverflow.com/questions/1975416/what-is-the-function-of-the-vary-accept-http-header/1975677#1975677>
    if (setVary) context.vary(setVary);
    context.state.xhr = context.request.get('X-Requested-With') === 'XMLHttpRequest';
    return next();
  }
}
