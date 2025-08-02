function minEatingSpeed(piles, h) {
  let left = 1,
      right = Math.max(...piles)

  function canEat(speed) {
    let hours = 0
    for (let pile of piles) {
      hours += Math.ceil(pile / speed)
    }

    return hours <= h
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canEat(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))