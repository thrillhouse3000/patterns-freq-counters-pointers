// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    let obj = {}
    let left = 0
    while(keys[left] && vals[left]) {
        obj[keys[left]] = vals[left]
        left++;
    }
    if (keys[left]) {
        let remainder = keys.slice(left)
        for (let key of remainder) {
            obj[key] = null
        }   
    }
    return obj
}
