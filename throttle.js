//防抖
function debounce(func, wait) {
    var timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait)
    }
}

//节流
const throttle = (func, throttle) => {
    if (typeof func !== "function") {
        throw new TypeError('func is not a function')
    }
    if (typeof throttle !== "number") {
        throw new TypeError('Expected a number')
    }
    let timer, result
    let start = +new Date();
    return (...arg) => {
        let now = +new Date();
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        if (now - start >= throttle) {
            result = func(...arg);
            start = now;
        } else if (!timer) {
            timer = setTimeout(() => {
                result = func(...arg);
            }, throttle);
        }
        return result
    }
}

const x = (fn, wait) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}