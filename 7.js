const concat = (arr1, arr2) => {
  const resArr = []

  while (arr1.length || arr2.length) {
    if (arr1.length && !arr2.length) {
      resArr.push(arr1.shift())
      continue
    }

    if (!arr1.length && arr2.length) {
      resArr.push(arr2.shift())
      continue
    }

    const number = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()

    resArr.push(number)
  }

  return resArr
}

const mergeSort = (arr) => {
  if (arr.length === 1) return arr

  const index = Math.floor(arr.length / 2)

  const arr1 = mergeSort(arr.slice(0, index))
  const arr2 = mergeSort(arr.slice(index))

  return concat(arr1, arr2)
}

console.log(mergeSort([10, 45, 3, 2, 1, 0]))
