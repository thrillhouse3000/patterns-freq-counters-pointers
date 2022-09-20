// add whatever parameters you deem necessary
//frequency counter approach

function constructNote(str1, str2) {
    let counter1 = countStr(str1)
    let counter2 = countStr(str2)
    if (counter1.size > counter2.size) return false
    for (let key of counter1.keys()) {
        if (counter1.get(key) > counter2.get(key)) return false
    }
    return true
}

function countStr(str) {
    let counter = new Map()
    for (let char of str) {
        let charVal = counter.get(char) || 0
        counter.set(char, charVal + 1)
    }
    return counter
}
