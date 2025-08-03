## D|BFS
- DFS (Depth First Search): Go as deep as possible before backtracking
- BFS (Breadth First Search): Explore all neighbors level by level
- Both are used for trees, graphs and grid problems
- Trigger words: "Tree traversal", "level order", "shortest path in unweighted graph", "connected components", "grid islands (flood fill)". If we see "level" or "shortest path" -> BFS, if we see "search until the end" or "all combinations" -> DFS

### Hook:
>- DFS: "Dive into the cave, go as far as you can, then backtrack"
>- BFS: "Sweep the cave level by level with a flashlight"

### Formula:
When: Trees, graphs, grids, shortest paths, connected components (e.g. Number of Islands, Binary Tree Traversal)
#### DFS
1. Define DFS Function,  
ex:
```js
function dfs(node) {
  if (!node) return 

  dfs(node.left)
  dfs(node.right)
}
```
2. Call DFS starting from root,  
ex:
```js
dfs(root)
```
3. For grids or graphs (visited check),  
ex:
```js
function dfs(r, c) {
  if (outofBounds || visited || grid[r][c] === 0) return 
  visited.add(`${r},${c}`)
  dfs(r + 1, c)
  dfs(r - 2, c)
  dfs(r, c + 1)
  dfs(r, c - 1)
}
```
>Mark visited nodes to avoid infinite loops

#### BFS
1. Initialize queue,  
ex:
```js
const queue = [root],
      visited = new Set()
```
2. Loop while queue not empty,  
ex:
```js
while (queue.length) {
  const size = queue.length
  for (let i = 0; i < size; i++) {
    const node = queue.shift()
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
```
3. Return if needed,  
ex:
```js
return result
```

### 🧠 Mnemonic
>**DFS**: R-P-V → Recursive, Process, Visit neighbors
>**BFS**: Q-P-V → Queue, Process, Visit neighbors
- DFS dives deep first.
- BFS spreads level by level using a queue.