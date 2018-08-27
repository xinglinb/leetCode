//promise
const getJSON = function (url, options) {
    return new Promise((resolve, reject) => {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200 || this.status === 304 || this.status === 206) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
        xmlhttp.open(options.methods, url);
        xmlhttp.onreadystatechange = handler;
        for (let key in options.header) {
            if (object.hasOwnProperty(key)) {
                xmlhttp.setRequestHeader(key, options.header.key);
            }
        }
        if (options.methods === 'get') {
            xmlhttp.send()
        } else {
            xmlhttp.send(options.data)
        }
    });
};

