// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let left = 0
    let right = arr.length - 1
    let sumLeft = 0
    let sumRight = 0
    let pivot = -1

    while (left !== right) {
        if(sumLeft < sumRight) {
            sumLeft += arr[left]
            left++
        } else if (sumRight < sumLeft) {
            sumRight += arr[right]
            right--
        } else if (sumLeft === sumRight) {
            sumLeft += arr[left]
            sumRight += arr[right]
            left++
            right--
        }
        pivot = Math.min(left, right)
    }
    return pivot
}
