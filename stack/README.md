## Stack
- A stack is a LIFO (Last in First Out) structure
- Useful for tracking nested or sequential states (like parentheses) or for solving problems where you must "undo" or backtrack steps
- Trigger words: "Balanced parentheses", "undo operations", "next greater element", monotonic stack", "evaluate expression" (think stack if we see "balanced", "next greater", "reverse order of operations")

### Hook:
>"A stack is a pile of plates - last plate you put down is the first plate you pick up"
- Balanced parentheses -> push plates for opens, pop for close
- Monotonic stack -> push until a taller plate comes, then removes smaller plates