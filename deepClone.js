/**
 * deep clone
 * @param  {[type]} obj object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */

const deepClone = (obj) => {
    let map = new WeakMap()
    const _clone = (obj) => {
        if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
            return obj
        }
        let type = Object.prototype.toString.call(obj)
        if (type == '[object Date]') return new Date(obj.getTime());
        if (type == '[object Function]') {
            let fn = new Function("return " + obj.toString())();
            fn.prototype = obj.prototype;
            return fn
        };
        if (type == '[object RegExp]') return new RegExp(obj.source, /\w*$/.exec(obj))
        let child
        if (map.has(obj)) {
            return map.get(obj)
        }
        if (type == '[object Object]') {
            proto = Object.getPrototypeOf(obj);
            child = Object.create(proto);
        } else if (Array.isArray(obj)) {
            child = []
        }
        map.set(obj, child)
        for (let i in obj) {
            console.log(i)
            child[i] = deepClone(obj[i])
        }
        return child
    }
    return _clone(obj)
}