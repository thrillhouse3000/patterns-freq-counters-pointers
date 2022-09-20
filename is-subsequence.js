// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let counter1 = countChars(str1)
    let subChars = ''
    for (let char of str2) {
        if (counter1[char]) {
            subChars += char
        }
    }
    let counter2 = countChars(subChars)
    let keys1 = Object.keys(counter1)
    let keys2 = Object.keys(counter2)
    if (keys1.length > keys2.length) return false
    for(let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) return false
    }
    return true
}

const countChars = (str) => {
    let counter = {}
    for (let char of str) {
        counter[char] ? counter[char] += 1 : counter[char] = 1
    }
    return counter
}
