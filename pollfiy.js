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