function firstUniqueChar(str) {
  const stash = new Map()

  for (let s of str) {
    stash.set(s, (stash.get(s) || 0) + 1)
  }

  for (let i = 0; i < str.length; i++) {
    if (stash.get(str[i]) === 1) return i
  }

  return -1
}

console.log(firstUniqueChar('leetcode'))
console.log(firstUniqueChar('armanrizal'))