## Two Pointers (Fixed direction until meet)
- Use two indices to shrink or expand a window while moving toward each other or in the same direction
- Trigger words: "sorted array", "pair sum", "container", "intersection"

### Hook:
> "Two archers on a line - if the arrow is two short, move left forward, if too long, move right backward"
- Visualize `left` and `right` standing at both ends of a sorted array, adjusting until they meet the target

### Formula
1. Initialize pointers (most left & most right)
ex:
```js
let left = 0,
    right = arr.length - 1
```
2. Loop until the pointers meet
ex:
```js
while (left < right) { ... }
```
3. Calculate something in the loop
ex:
```js
const sum = arr[left] + arr[right]
```
4. Decision making
ex:
```js
if (sum === target) return true
if (sum < target) left++
else right++
```
5. Return result if no match
```js
return fase
```

## Sliding Window (Elastic movement)
- Use a dynamic "window" to track a substring or subarray, expanding or shrinking it based on constraints
- Trigger words: "longest", "substring", "subarray", "no repeat"

### Hook:
> "A window sliding over a string - shrink if it breaks, expand if it fits"
- Visualise a window expanding right to inlcude characters and shrinking left to remove duplicates or excess

## Fast & Slow Pointers
- Use two pointers that move at different speeds (usually `fast` moves 2 steps, `slow` moves ` step) to detect cycles or find midpoints.
- Trigger words: "Linked list cycle", "Detect loop", "Find middle of linked list"

### Hook:
> "Tortoise and Hare race - if the hare laps the tortoise, there's a loop"
- Visualize `slow` as a turtle and `fast` as a rabbit running in a circular track
- if they meet -> cycle exists
- if the rabbit falls of the track -> no cycle