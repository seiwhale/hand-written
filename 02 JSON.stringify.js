function jsonStringify(obj, isArr = false) {
  let type = typeof obj; // object (function undefined symbol) (number string boolean)

  // 简单类型
  const isSimple = /boolean|number|string/.test(type);
  if (type !== "object" || obj === null) {
      if (isSimple || obj === null) {
          if (/string/.test(type)) {
              obj = '"' + obj + '"'
          }
          return String(obj);
      } else if (isArr) {
          return null
      } else {
          return undefined
      }
  } else {
      let json = []
      let _isArr = (obj && obj.constructor === Array);
      for (let k in obj) {
          let v = obj[k];
          let type = typeof v;
          v = jsonStringify(v, _isArr)
          if (v !== undefined) {
              json.push((_isArr ? "" : '"' + k + '":') + String(v))
          }
      }
      return (_isArr ? "[" : "{") + String(json) + (_isArr ? "]" : "}")
  }
}

console.log(jsonStringify(1) === JSON.stringify(1));
console.log(jsonStringify(null) === JSON.stringify(null));
console.log(jsonStringify(undefined) === JSON.stringify(undefined));
console.log(jsonStringify(Symbol()) === JSON.stringify(Symbol()));
console.log(jsonStringify(function() {}) === JSON.stringify(function() {}));
console.log(jsonStringify([1, function(){}, Symbol(), "false", false, undefined, {name: 'Cola', say:function() {}}]) === JSON.stringify([1, function(){}, Symbol(), "false", false, undefined, {name: 'Cola', say:function() {}}]));
console.log(jsonStringify({ name: '李世杰', age: 18 }) === JSON.stringify({ name: '李世杰', age: 18 }));