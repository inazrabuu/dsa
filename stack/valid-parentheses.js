function isValidParentheses(s) {
  const map = {')': '(', ']': '[', '}': '{'},
        stack = []

  for (let ch of s) {
    if (!map[ch]) {
      stack.push(ch)
    } else {
      if (stack.pop() !== map[ch]) return false
    }
  }

  return stack.length === 0
}

console.log(isValidParentheses('(){}[]'))
console.log(isValidParentheses('[]{]()'))