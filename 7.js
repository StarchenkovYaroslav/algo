const concat = (arr1, arr2) => {
  const resArr = []

  let index1 = 0
  let index2 = 0

  while (index1 < arr1.length || index2 < arr2.length) {
    if (index2 >= arr2.length) {
      resArr.push(arr1[index1++])
      continue
    }

    if (index1 >= arr1.length) {
      resArr.push(arr2[index2++])
      continue
    }

    const number = arr1[index1] < arr2[index2] ? arr1[index1++] : arr2[index2++]

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

console.log(mergeSort([10, 45, 3, 0, 2, 1, 10, 11, 19, 10]))
