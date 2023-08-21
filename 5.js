const left3 = {
  value: 5
}

const right3 = {
  value: 6,
}

const left2 = {
  value: 4,
  left: left3,
  right: right3
}

const left1 = {
  value: 2,
  left: left2,
}

const right1 = {
  value: 3
}

const vertex = {
  value: 1,
  left: left1,
  right: right1,
}

const bfsQueue = (node) => {
  const queue = [node]

  while (queue.length) {
    const currNode = queue.shift()

    console.log(currNode.value)

    if (currNode.left) queue.push(currNode.left)
    if (currNode.right) queue.push(currNode.right)
  }
}

bfsQueue(vertex)
