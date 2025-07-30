function hasDuplicateMap(arr) {
  const map = new Map()

  for (let a of arr) {
    if (map.has(a)) return true
    map.set(a, true)
  }

  return false
}

function hasDuplicateSet(arr) {
  const seen = new Set()

  for (let a of arr) {
    if (seen.has(a)) return true
    seen.add(a)
  }

  return false
}

const arr = [1, 2, 3, 4, 5, 4, 3]
console.log(hasDuplicateMap(arr))
console.log(hasDuplicateSet(arr))