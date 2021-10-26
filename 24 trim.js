/******************************** trim ********************************/

/**
 * 利用两次正则，速度非常快（得益于浏览器的优化）
 * @returns
 */
String.prototype.trim1 = function () {
  return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

/**
 * 利用两次正则，速度稍慢于 trim1（因为它假设至少存在一个空白字符）
 * @returns
 */
String.prototype.trim2 = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "")
}

/**
 * 截取字符串，速度稍慢于上面👆两个
 * @returns
 */
String.prototype.trim3 = function () {
  return this.substring(
    Math.max(this.search(/\S/), 0),
    this.search(/\S\s*$/) + 1
  )
}

/**
 * 同方法二，但失去浏览器优化的机会，稍逊于方法二
 * @returns
 */
String.prototype.trim4 = function () {
  return this.replace(/^\s+|\s+$/, "")
}

/**
 * 利用 match 和 非捕获性分组（?:exp）
 * @returns
 */
String.prototype.trim5 = function () {
  var str = this
  str = str.match(/\S+(?:\s+\S+)*/)
  return str ? str[0] : ""
}

/**
 * 效率较差
 * @returns
 */
String.prototype.trim6 = function () {
  return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")
}

/**
 * 和 trim6 很相似，但用了非捕获分组进行了优点，性能效之有一点点提升。
 * @returns
 */
String.prototype.trim7 = function () {
  return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1")
}

/**
 * 动用了非捕获分组与字符集合，用?顶替了*，效果非常惊人
 * @returns
 */
String.prototype.trim8 = function () {
  return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, "$1")
}

/**
 * 用懒惰匹配顶替非捕获分组
 * @returns
 */
String.prototype.trim9 = function () {
  return this.replace(/^\s*([\S\s]*?)\s*$/, "$1")
}

/**
 * 把可能的空白符全部列出来，在第一次遍历中砍掉前面的空白，第二次砍掉后面的空白
 * 速度极快
 * @returns
 */
String.prototype.trim10 = function () {
  var str = this,
    whitespace =
      " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000"
  for (var i = 0, len = str.length; i < len; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i)
      break
    }
  }
  for (i = str.length - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1)
      break
    }
  }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : ""
}

/**
 * 正则家字符串截取
 * @returns
 */
String.prototype.trim11 = function () {
  var str = this,
    str = str.replace(/^\s+/, "")
  for (var i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1)
      break
    }
  }
  return str
}

/**
 *
 * @returns
 */
String.prototype.trim12 = function () {
  var str = this,
    str = str.replace(/^\s\s*/, ""),
    ws = /\s/,
    i = str.length
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1)
}
