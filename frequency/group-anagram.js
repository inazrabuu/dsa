function groupAnagram(words) {
  const map = new Map()

  for (let word of words) {
    const key = word.split('').sort().join('')
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(word)
  }

  return map
}

const words = ["eat", "ate", "tea", "tan", "nat", "bat", "tab"]

console.log(groupAnagram(words))