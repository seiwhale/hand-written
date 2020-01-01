Array.prototype.myPush = function() {
  for (var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

Array.prototype.myPop = function() {
  return this.splice(this.length - 1, 1)[0];
};
