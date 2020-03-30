function ajax(options) {
	var xhr = null;
	var params = formsParams(options, data);
	//创建对象
	if (window.XMLHttpRequest()) {
		xhr = new XMLHttpRequest()
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//连接
	if (options.type === "GET") {
		xhr.open(options.type, options.url + "?" +params, options.async);
		xhr.send(null)
	} else if (options.type === "POST") {
		xhr.open(options.type, options.url, options.async);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	//判断状态
	xhr.onreadystateChange = function() {
		if (xhr.readyState === 4 && xhr.status ===200) {
			options.success(xhr.responseText);
		}
	function formParams(data) {
		var arr = [];
		for (var prop in data) {
			arr.push(prop + "=" + data[prop]);
		}
		return arr.join("&");
	}
	}
}
//调用
ajax({
	url: "time.php",
	type: "POST",
	async: true,
	data: {
		name: "Tom",
		age: 18
	},
	success: function(data) {
		console.log(data);
	}
})
