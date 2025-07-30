class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new ListNode(value)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }

  createCycle(position) {
    if (position < 0) return

    let tail = this.head,
        cycleNode = null,
        index = 0

    while (tail.next) {
      if (index === position) {
        cycleNode = tail
      }
      tail = tail.next
      index++
    }
    tail.next = cycleNode
  }

  print() {
    let current = this.head
    const nodes = []
    while (current) {
      nodes.push(current.value)
      current = current.next
    }

    console.log(nodes.join(' -> '))
  }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

function findMiddleNode(head) {
  let slow = head, 
      fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function detectCycle(head) {
  let slow = head,
      fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      break
    }
  }

  if (!fast || !fast.next) {
    return null
  }

  slow = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}

console.log(findMiddleNode(list.head).value)
console.log(detectCycle(list.head))

list.createCycle(2)

console.log(detectCycle(list.head))