// 防抖
function debounce(fn, wait = 50, immediate) {
  let timer;
  return function() {
    if (immediate) {
      fn.apply(this, arguments);
    }
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

// 节流
function throttle(fn, wait) {
  let prev = new Date();
  return function() {
    const args = arguments;
    const now = new Date();
    if (now - prev > wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  };
}
