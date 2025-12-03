function flat(listOfArrays) {
  console.info("My custom fn:");
  return listOfArrays.reduce((acc, curr) => acc.concat(curr), []);
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(flat(input)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(input.flat()); // Built-in: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.flat = function () {
  return flat(this);
};

console.log(input.flat()); // With my custom fn: [1, 2, 3, 4, 5, 6, 7, 8, 9]
