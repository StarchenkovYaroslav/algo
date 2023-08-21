const leftBraces = ['(', '[', '{']
const rightBraces = [')', ']', '}']

const pairs = {
  ')': '(',
  ']': '[',
  '}': '{'
}

const braces = (string) => {
  const stack = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (leftBraces.includes(char)) {
      stack.push(char)
    } else if (rightBraces.includes(char)) {
      if (stack.pop() !== pairs[char]) {
        throw new Error('mismatch')
      }
    }
  }

  if (stack.length) throw new Error('no pair')

  console.log('passed')
}

braces('sdf(asdf)asdf[sadf]asdf{asdf}')
