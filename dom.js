const DFSdom = (doms = document.children) => {
    let result = []
    doms = [...doms];
    for (let i of doms) {
        result.push(i);
        if (i.children) {
            result = result.concat(DFSdom(i.children))
        }
    };
    return result
}


const BFSdom = (doms = document.children) => {
    let result = [],
        domArr = [...doms];
    while (domArr.length) {
        let dom = domArr.shift()
        result.push(dom)
        if (dom.children)
            domArr.push(...dom.children)
    }
    return result
}