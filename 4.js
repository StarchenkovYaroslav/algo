const left3 = {
  value: 4
}

const right3 = {
  value: 5,
}

const left2 = {
  value: 3,
  left: left3,
  right: right3
}

const left1 = {
  value: 2,
  left: left2,
}

const right1 = {
  value: 6
}

const vertex = {
  value: 1,
  left: left1,
  right: right1,
}

const dfs = (node) => {
  console.log(node.value)

  if (node.left) dfs(node.left)

  if (node.right) dfs(node.right)
}

const dfsStack = (node) => {
  const stack = [node]

  while (stack.length) {
    const currNode = stack.pop()

    console.log(currNode.value)

    if (currNode.right) stack.push(currNode.right)
    if (currNode.left) stack.push(currNode.left)
  }
}

dfs(vertex)
dfsStack(vertex)
