## Binary Search
- Instead of searching in an array directly, we search in the range of possible answers. Use a helper function (`canDo(mid)`) to check if a candidate answer is valid, then narrow down.
- Trigger words: "Find minimum X such that...", "Capacity", "Speed", "Time", "Allocate", "Distribute". If the problem says "Search for a value that satisfies a condition" -> Binary search.

### Hook:
>Think of it like "Guess the Number" but with a **feasibility check**
>- "If it's possible, shrink the search range (go left)"
>- "If it's not possible, increase it (go right)"

### Formula:
When: Problems with "find the minimum / maximum value such that a condition is true" (e.g. Koko Eating Banana, Ship Within Days, Find Peak Element).

1. Define search range,  
ex:
```js
let left = minPossibleValue,
    right = maxPossibleValue
```
>Example for Koko → `left = 1`, `right = Math.max(...piles)`. 
>For shippiing → `left = Math.max(...weights)`, `right = sum(weights)`
2. Define feasibility check function,  
ex:
```js
function canDo(mid) {
  // simulate condition
  return trueOrFalse
}
```
>Example: check if speed or capacity works.
3. Binary Search map,  
ex:
```js
while (left < right) {
  const mid = Math.floor((right - left) / 2)

  if (canDo(mid)) {
    right = mid
  } else {
    left = mid + 1
  }
}
```
4. Return answer,  
ex:
```js
return left
```

### 🧠 Mnemonic
>R-F-B-R → Range, Feasibility, Binary Loop, Return
- Range: Define left/right based on min and max possible values
- Feasibility: Write a canDo(mid) checker
- Binary Loop: Shrink range until left meets right
- Return: Left (or right) as final answer