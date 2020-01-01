// 父类
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function() {
  console.log("Parent name is " + this.name);
};

// 子类
function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}

// 继承方法
function create(parent) {
  function F() {}
  F.prototype = parent.prototype;
  return new F();
}

Child.prototype = create(Parent);
Child.prototype.sayName = function() {
  console.log("child name:", this.name);
};
Child.prototype.constructor = Child;
var parent = new Parent("father");
parent.sayName();
var child = new Child("son", "father");
