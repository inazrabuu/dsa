const slidingWindowMaximum = function(nums, k) {
  const deque = [],
        result = []

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

    deque.push(i)

    if (deque[0] <= i - k) {
      deque.shift()
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

console.log(slidingWindowMaximum([1,3,-1,-3,5,3,6,7], 3))