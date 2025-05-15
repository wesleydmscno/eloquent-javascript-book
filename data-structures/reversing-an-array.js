const arr1 = [1, 2, 3];

function reverseArray(arr) {
  const newArr = [];

  for (const item of arr) {
    newArr.unshift(item);
  }

  return newArr;
}

console.log("// Immutable");
console.log(arr1); // [1, 2, 3]
console.log(reverseArray(arr1));
console.log(arr1); // [1, 2, 3]

const arr2 = [4, 5, 6, 7, 8];

function reverseArrayInPlace(arr) {
  const arrCopy = [...arr];

  for (let y = 0; y <= arr.length - 1; y++) {
    arr[y] = arrCopy[arr.length - 1 - y];
  }

  return arr;
}

console.log("// Mutable");
console.log(arr2); // [4, 5, 6, 7, 8]
console.log(reverseArrayInPlace(arr2));
console.log(arr2); // [8, 7, 6, 5, 4]
