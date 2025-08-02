function shipWithinDays(weights, d) {
  let left = Math.max(...weights),
      right = weights.reduce((a, b) => a + b)

  function canShip(capacity) {
    let days = 1,
        current = 0

    for (let weight of weights) {
      if (current + weight > capacity) {
        days++
        current = 0
      }

      current += weight
    }

    return days <= d
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (canShip(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))