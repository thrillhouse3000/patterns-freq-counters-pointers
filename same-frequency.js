// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    let counter1 = countDigits(n1)
    let counter2 = countDigits(n2)
    if (counter1.size !== counter2.size) return false
    for (let [key, value] of counter1) {
        if (value !== counter2.get(key)) return false
    }
    return true
}

const countDigits = (num) => {
    let numStr = num.toString()
    let counter = new Map()
    for (let digit of numStr) {
        let digitVal = counter.get(+digit) || 0
        counter.set(+digit, digitVal + 1)
    }
    return counter
}
