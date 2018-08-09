function New(...args) {
    let obj = new Object();
    obj.__proto__ = car.prototype;
    let result = car.apply(obj, args);
    return typeof result == 'object' ? result : obj
}

function Instanceof(left, right) {
    while (left.__proto__) {
        if (left.__proto__ == right.prototype) {
            return true
        } else {
            left = left.__proto__
        }
    };
    return false
}

Array.prototype.myMap = function (fn, thisArg) {
    if (typeof fn !== 'function')
        throw new TypeError(fn + 'is not a function')
    if (Object.prototype.toString.call(this) !== "[object Array]")
        throw new TypeError('Array.prototype.myMap called on null or undefined')
    let _this = thisArg || this
    let arr = Object(this)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn.call(_this, arr[i], i, arr))
    }
    return result
}