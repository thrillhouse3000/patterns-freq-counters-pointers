// add whatever parameters you deem necessary
//two pointers approach

function averagePair(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        let avg = ((arr[left] + arr[right]) / 2)
        if (avg === target) {
            return true
        } else if (avg > target) {
            right--;
        } else {
            left++;
        }
    }
    return false
}
