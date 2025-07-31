const TreeNode = require('./treenode')

function preorderTraversalRecursive(root) {
  const result = []

  function dfs(node) {
    if (!node) return 
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return result
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)

console.log(preorderTraversalRecursive(root))

function preorderTraversalIterative(root) {
  if (!root) return []

  const stack = [root],
        result = []

  while (stack.length) {
    const node = stack.pop()

    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)

    result.push(node.val)
  }

  return result
}

console.log(preorderTraversalIterative(root))