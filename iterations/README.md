## Two Pointers (Fixed direction until meet)
- Use two indices to shrink or expand a window while moving toward each other or in the same direction
- Trigger words: "sorted array", "pair sum", "container", "intersection"

### Hook:
> "Two archers on a line - if the arrow is two short, move left forward, if too long, move right backward"
- Visualize `left` and `right` standing at both ends of a sorted array, adjusting until they meet the target

### Formula
1. Initialize pointers (most left & most right),  
ex:
```js
let left = 0,
    right = arr.length - 1
```
2. Loop until the pointers meet,  
ex:
```js
while (left < right) { ... }
```
3. Calculate something in the loop,  
ex:
```js
const sum = arr[left] + arr[right]
```
4. Decision making,  
ex:
```js
if (sum === target) return true
if (sum < target) left++
else right++
```
5. Return result if no match,  
ex:
```js
return fase
```

### 🧠 Mnemonic
L-W-C-D-R → Left, While, Calc, Decide, Return
- Left/right pointer init
- While loop until they meet
- Calculation
- Decision which pointer to move
- Return result if no answer

## Sliding Window (Elastic movement)
- Use a dynamic "window" to track a substring or subarray, expanding or shrinking it based on constraints
- Trigger words: "longest", "substring", "subarray", "no repeat"

### Hook:
> "A window sliding over a string - shrink if it breaks, expand if it fits"
- Visualise a window expanding right to inlcude characters and shrinking left to remove duplicates or excess

### Formula:
1. Initialize pointers and state,  
ex:
```js
let left = 0,
    cache = new Set() // or Map for frequency
    result = 0
```
2. Expand pointer with `right` pointer,  
ex:
```js
for (let right = 0; right < s.length; right++) { ... }
```
3. Shrink windows if needed,  
ex:
```js
while (cache.has(s[right])) {
  cache.delete(s[left])
  left++
}
```
4. Add the current element to the cache,  
ex:
```js
cache.add(s[right])
```
5. Update result,  
ex:
```js
result = Math.max(result, right - left + 1)
```
6. Return result
```js
return result
```

## Fast & Slow Pointers
- Use two pointers that move at different speeds (usually `fast` moves 2 steps, `slow` moves ` step) to detect cycles or find midpoints.
- Trigger words: "Linked list cycle", "Detect loop", "Find middle of linked list"

### Hook:
> "Tortoise and Hare race - if the hare laps the tortoise, there's a loop"
- Visualize `slow` as a turtle and `fast` as a rabbit running in a circular track
- if they meet -> cycle exists
- if the rabbit falls of the track -> no cycle