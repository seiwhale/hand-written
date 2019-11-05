// evel
function jsonParse(opt) {
	return eval('(' + opt + ')')
}

// 校验参数，避免 XSS 攻击
function jsonParse2(json) {
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    if (rx_one.test(json.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
        var obj = eval("(" + json + ")")
        return obj;
    }
}

// Function
var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();

console.log(jsonParse2(JSON.stringify({ x: 5})))
console.log(jsonParse2(JSON.stringify([1, "false", false])))
console.log(jsonParse2(JSON.stringify({b: undefined})))