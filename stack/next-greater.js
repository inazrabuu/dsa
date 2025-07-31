function nextGreaterElements(nums) {
  const stack = [],
        result = new Array(nums.length).fill(-1)

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop()
    }

    if (stack.length) {
      result[i] = nums[stack[stack.length - 1]]
    }

    stack.push(i)
  }

  return result
}

console.log(nextGreaterElements([2, 1, 2, 4, 3]))