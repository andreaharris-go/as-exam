function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)]
  let L = left
  let R = right;
  let basket = null

  while (L <= R) {
    while (items[L] < pivot) {
      L++;
    }
    while (items[R] > pivot) {
      R--;
    }
    if (L <= R) {
      basket = items[L]
      items[L] = items[R]
      items[R] = basket
      L++;
      R--;
    }
  }
  return L;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

const exceptTypeCons = {
  MIN: 'min',
  MAX: 'max',
  ORDER: 'order'
}

function sumFn(arr, exceptType = exceptTypeCons.MIN, exceptIndex = 0) {
  const numberList = quickSort(arr, 0, arr.length - 1)

  switch (exceptType) {
    case exceptTypeCons.MIN: {
      delete numberList[0]
      return numberList.reduce((a, b) => a + b, 0)
    }
    case exceptTypeCons.MAX: {
      delete numberList[numberList.length - 1]
      return numberList.reduce((a, b) => a + b, 0)
    }
    case exceptTypeCons.ORDER: {
      delete numberList[exceptIndex - 1]
      return numberList.reduce((a, b) => a + b, 0)
    }
  }
}

console.log(`[4,5,2,1,3] except MIN = ` + sumFn([4,5,2,1,3], 'min'))
console.log(`[4,5,2,1,3] except MAX = ` + sumFn([4,5,2,1,3], 'max'))
console.log(`[4,5,2,1,3] except ORDER 1 = ` + sumFn([4,5,2,1,3], 'order', 1))
console.log(`[4,5,2,1,3] except ORDER 2 = ` + sumFn([4,5,2,1,3], 'order', 2))
console.log(`[4,5,2,1,3] except ORDER 3 = ` + sumFn([4,5,2,1,3], 'order', 3))
console.log(`[4,5,2,1,3] except ORDER 4 = ` + sumFn([4,5,2,1,3], 'order', 4))
console.log(`[4,5,2,1,3] except ORDER 5 = ` + sumFn([4,5,2,1,3], 'order', 5))