function combinationSum(candidates, target) {
  const result = []

  function backtrack(start, path, total) {
    if (total === target) {
      result.push([...path])
      return 
    }

    if (total > target) return

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      backtrack(i, path, total + candidates[i])
      path.pop()
    }

  }

  backtrack(0, [], 0)

  return result
}

console.log(combinationSum([2, 3, 4, 5, 6], 7))