function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  const arr = [];

  arr.push(list.value);

  if (list.rest) {
    arr.push(...listToArray(list.rest));
  }

  return arr;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(element, list) {
  return { value: element, rest: list };
}

console.log(prepend(10, prepend(20, null)));

function nth(list, index) {
  return listToArray(list)[index];
}

console.log(nth(arrayToList([10, 20, 30]), 1));
