## Binary Search
- Instead of searching in an array directly, we search in the range of possible answers. Use a helper function (`canDo(mid)`) to check if a candidate answer is valid, then narrow down.
- Trigger words: "Find minimum X such that...", "Capacity", "Speed", "Time", "Allocate", "Distribute". If the problem says "Search for a value that satisfies a condition" -> Binary search.

### Hook:
>Think of it like "Guess the Number" but with a **feasibility check**
>- "If it's possible, shrink the search range (go left)"
>- "If it's not possible, increase it (go right)"