const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    let maxIndex = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j
      }
    }

    const max = arr[maxIndex]
    const last = arr[arr.length - i - 1]

    arr[arr.length - i - 1] = max
    arr[maxIndex] = last
  }

  return arr
}

console.log(selectSort([5, 3, 6, 0, 1, 12, 90, 54, 11, 9, 2, 1]))
