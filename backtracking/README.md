## Backtracking
- Backtracking is **DFS with undo steps**
- Explore all possibilities, and if path doesn't work, "backtrack" and try another one
- Trigger words: "All combinations", "All permutations", "Subsets", "Word search in grid", 'N-Queens". If we see "generate all possibilities" -> backtracking.

### Hook:
>"Walking through a maze: try a path, mark it, if it's wrong, step back and try another one"
>- **DFS**: just goes deep
>- **Backtrack**: goes deep AND has an "undo" step (`pop`)

### Formula:
When: Generate permutations, combinations, subsets, or solve constraint problems (e.g. N-Queens, Sudoku)
1. Initialize result container,  
ex:
```js
const result = []
```
2. Define backtrack function,  
ex:
```js
function backtrack(path, start) {
  //base case
  if (condition) {
    result.push([...path])
    return
  }

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i])      // choose
    backtrack(path, i + 1)  // explore
    path.pop()              // un-choose (backtrack)
  }
}
```
3. Call backtrack,  
ex:
```js
backtrack([], 0)
return result
```
4. For permutations, add a `used[]` array to track visited elements.  
ex:
```js
if (used[i]) continue
used[i] = true
path.push(nums[i])
backtrack(path)
path.pop()
used[i] = false
```

### Mnemonic
>C-B-L-P → Choose, Backtrack, Loop, Pop
- Choose: Pick a candidate
- Backtrack: Recurse deeper
- Loop: Iterate over candidates
- Pop: Undo the choice