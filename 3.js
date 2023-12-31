const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i]

    let prevIndex = i - 1
    while (arr[prevIndex] > curr) {
      arr[prevIndex + 1] = arr[prevIndex]

      prevIndex--
    }

    arr[prevIndex + 1] = curr
  }

  return arr
}

console.log(insertSort([5, 3, 6, 0, 1, 12, 90, 54, 11, 9, 2, 1, -31]))
