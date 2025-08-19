const largestRectangle = function(heights) {
  let size = 0
  const stack = []

  for (let i = 0; i <= heights.length; i++) {
    let pole = i === heights.length ? 0 : heights[i]

    while (stack.length && pole < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()],
          width = stack.length ? i - stack[stack.length - 1] - 1 : i
      size = Math.max(size, height * width)

    }
    stack.push(i)
  }

  return size
}

console.log(largestRectangle([3, 4, 2, 5, 7 ,1]))
console.log(largestRectangle([1, 2, 3, 4, 5]))