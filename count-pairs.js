// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let sorted = arr.sort((a,b) => a - b)
    let left = 0
    let right = arr.length - 1
    let pairs = 0
    while (left < right) {
        if (sorted[left] + sorted[right] === target) {
            pairs++
            left++
            right--
        } else if ((sorted[left] + sorted[right]) > target) {
            right--
        } else {
            left++
        }
    }
    return pairs
}
