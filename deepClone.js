const deepClone = (obj) => {
    if (typeof obj !== 'object' && typeof obj !== 'function' || obj == null) {
        return obj
    }
    let type = Object.prototype.toString.call(obj)
    if (type == '[object Date]') return new Date(obj.getTime());
    if (type == '[object Function]') return new Function("return " + obj.toString())();
    if (type == '[object RegExp]') return new RegExp(obj.source, /\w*$/.exec(obj))
    let child
    if (type == '[object Object]') {
        proto = Object.getPrototypeOf(obj);
        child = Object.create(proto);
    } else if (Array.isArray(obj)) {
        child = []
    }
    for (let i in obj) {
        console.log(i)
        child[i] = deepClone(obj[i])
    }
    return child
}
let a = {
    a: function () {
        this.a = 1
    },
    b: [1,2,3]
}
console.log(deepClone(a))
