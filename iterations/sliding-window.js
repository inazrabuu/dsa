function maxUniqueSubstrLength(s) {
  let left = 0, maxLen = 0
  const cache = new Set()
  for (let right = 0; right < s.length; right++) {
    while (cache.has(s[right])) {
      cache.delete(s[left++])
    }
    cache.add(s[right])

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

const text = "aabcabcdbb"
console.log(maxUniqueSubstrLength(text))