/**
 * requestAnimationFrame
 * 在完成动画特效时通常我们会使用 css 或者 js
 *
 * css 可以完成很多效果，而且体验非常不错
 * 但是仍然存在一些 css 无法完成的动画，例如页面滚动
 *
 * js 通常使用 setInterval 设置定时器来实现动态效果
 * 然后由于 js 单线程的原因，可能会导致实际效果有很多偏差
 *
 * 因此可以采用 requestAnimationFrame 来进行
 * 其效果就是让浏览器流畅的执行动画效果
 */

/**
 * 使用方法
 */
function animationWidth() {
  var div = document.getElementById('box');
  div.style.width = parseInt(div.style.width) + 1 + 'px';

  if (parseInt(div.style.width) < 200) {
    requestAnimationFrame(animationWidth);
  }
}
requestAnimationFrame(animationWidth);

/**
 * 考虑兼容
 */
(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();