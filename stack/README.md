## Stack
- A stack is a LIFO (Last in First Out) structure
- Useful for tracking nested or sequential states (like parentheses) or for solving problems where you must "undo" or backtrack steps
- Trigger words: "Balanced parentheses", "undo operations", "next greater element", monotonic stack", "evaluate expression" (think stack if we see "balanced", "next greater", "reverse order of operations")

### Hook:
>"A stack is a pile of plates - last plate you put down is the first plate you pick up"
- Balanced parentheses -> push plates for opens, pop for close
- Monotonic stack -> push until a taller plate comes, then removes smaller plates

### Formula:
When: Balanced parentheses, reverse polish notation (RPN), next greater element, or any "last-in, first-out" logic.
1. Initialize stack,  
ex:
```js
const stack = []
```
2. Iterate through input,  
ex:
```js
for (let ch of input) { ... }
```
3. Handle push or pop, 
ex:
- For balanced parentheses:
```js
if (ch === '(') stack.push(ch)
else if (ch === ')') {
  if (!stack.length) return false
  stack.pop()
}
```
- for RPN:
```js
if (isNumber(ch)) stack.push(Number(ch))
else {
  const b = stack.pop(),
        a = stack.pop()
  stack.push(applyOp(a, b, ch))
}
```
4. Finalize stack,  
ex:
- for parentheses:
```js
return stack.length === 0
```
- for RPN:
```js
return stack.pop()
```

### 🧠 Mnemonic
S-I-H-F → Stack, Iterate, Handle, Finalize
- Stack: Initialize empty array
- Iterate: Loop through input
- Handle: Push or pop based on rules
- Finalize: Return final answer or validate stack state