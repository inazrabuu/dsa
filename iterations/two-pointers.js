function isPairSum(arr, target) {
  arr = arr.sort()
  let left = 0,
      right = arr.length - 1
  
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      console.log(arr[left], arr[right])
      return true
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return false
}

const arr = [8, 4, 7, 2, 3, 1, 5],
      target = 10

console.log(isPairSum(arr, target))