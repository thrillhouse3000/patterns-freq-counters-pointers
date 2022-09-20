// add whatever parameters you deem necessary
function longestFall(arr) {
    let minIdx = 0
    let i = 0
    let count = 1
    let maxCount = 0

    if (arr.length === 0) return 0

    while (i < arr.length) {
        let min = arr[minIdx]
        if (arr[i] < min) {
            count++
            minIdx = i
        } else {
            count = 1
        }
        maxCount = Math.max(count, maxCount)
        i++
    }
    return maxCount    
}
