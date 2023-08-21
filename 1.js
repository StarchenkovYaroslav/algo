const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const curr = arr[j]
      const next = arr[j + 1]

      if (curr > next) {
        arr[j + 1] = curr
        arr[j] = next
      }
    }
  }

  return arr
}

console.log(bubbleSort([5, 3, 6, 0, 1, 12, 90, 54, 11, 9, 2, 1]))
