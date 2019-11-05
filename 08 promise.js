// 定义状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// myPromise
function myPromise (excutor) {
    // 保存当前 promise 对象
    let _this = this;
    // 初始化状态
    _this.status = PENDING;
    // 用于存储 fulfilled 时的值
    _this.value = undefined;
    // 用于存储 rejected 时的值
    _this.reason = undefined;
    // 用于存储 fulfilled 状态对应的 onFulfilled 函数
    _this.onFulfilledCallbacks = [];
    // 用于存储 rejected 状态对应的 onRejected 函数
    _this.onRejectedCallbacks = [];

    /**
     * resolve
     * @param {any} value
     */
    function resolve(value) {
        if (value instanceof myPromise) {
            return value.then(resolve, reject);
        }
        // 确保异步执行
        setTimeout(() => {
            if (_this.status === PENDING) {
                _this.status = FULFILLED;
                _this.value = value;
                _this.onFulfilledCallbacks.forEach(cb => cb(_this.value));
            }
        })
    }
    /**
     * reject
     * @param {any} reason
     */
    function reject(reason) {
        setTimeout(() => {
            if (_this.status === PENDING) {
                _this.status = REJECTED;
                _this.reason = reason;
                _this.onRejectedCallbacks.forEach(cb => cb(_this.reason));
            }
        })
    }

    // 捕获 excutor 执行器中的异常
    try {
        excutor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

/**
 * 解析 then 返回值与新 Promise 对象
 * @param {Object} newPromise 新的 Promise 对象 
 * @param {*} value 上一个 then 的返回值
 * @param {Function} resolve newPromise 的 resolve
 * @param {Function} reject newPromise 的 reject
 */
function resolvePromise(newPromise, value, resolve, reject) {
    // 是否为循环调用
    if (newPromise === value) {
        reject(new TypeError('Promise 发生了循环调用.'));
    }

    // value 为 Promise
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
        // 对象或者函数
        try {
            let then = value.then;  //取出then方法引用
            if (typeof then === 'function') {
                then.call(value, _value => {
                    resolvePromise(newPromise, _value, resolve, reject);
                }, err => {
                    reject(err);
                })
            } else {
                resolve(value);
            }
        } catch (e) {
            reject(e);
        }
    } else {    // 普通值
        resolve(value);
    }
}

// 在原型上定义 then 方法
myPromise.prototype.then = function (onFulfilled, onRejected) {
    let _this = this;
    let newPromise;

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected: reason => {
        throw reason;
    }

    // 成功态
    if (_this.status === FULFILLED) {
        newPromise = new myPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let _value = onFulfilled(_this.value);
                    resolvePromise(newPromise, _value, resolve, reject);
                } catch (err) {
                    reject(err);
                }
            })
        })
    }

    // 失败态
    if (_this.status === REJECTED) {
        newPromise = new myPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let _reason = onRejected(_this.reason);
                    resolvePromise(newPromise, _reason, resolve, reject);
                } catch (err) {
                    reject(err);
                }
            })
        })
    }

    // 等待态
    if (_this.status === PENDING) {
        newPromise = new myPromise((resolve, reject) => {
            _this.onFulfilledCallbacks.push(value => {
                try {
                    let _value = onFulfilled(value);
                    resolvePromise(newPromise, _value, resolve, reject);
                } catch (err) {
                    reject(err);
                }
            })
            _this.onRejectedCallbacks.push(reason => {
                try {
                    let _reason = onRejected(reason);
                    resolvePromise(newPromise, _reason, resolve, reject);
                } catch (err) {
                    reject(err);
                }
            })
        })
    }

    return newPromise;
}


var a = new myPromise((resolve, reject) => {
    resolve(123)
})
// console.log(a)
a.then(res => { console.log(res) })