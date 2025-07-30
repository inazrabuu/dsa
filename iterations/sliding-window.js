function maxUniqueSubstrLength(s) {
  let left = 0, maxLen = 0
  const cache = new Map()

  for (let right = 0; right < s.length; right++) {
    if (cache.has(s[right] && cache.get(s[right] >= left))) {
      left = cache.get(s[right]) + 1
    }

    cache.set(s[right], right)

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

const text = "aabcabcdbb"
console.log(maxUniqueSubstrLength(text))