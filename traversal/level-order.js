function levelOrder(root) {
  if (!root) return []

  const queue = [root],
        result = []

  while (queue.length) {
    const level = [],
          levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      level.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(level)
  }

  return result
}

const TreeNode = require('./treenode')

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)

console.log(levelOrder(root))