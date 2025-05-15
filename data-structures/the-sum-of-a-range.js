function range(start, end, step = start > end ? -1 : 1) {
  const list = [];

  const condition = (i) => (step > 0 ? i <= end : i >= end);

  for (let i = start; condition(i); i += step) {
    list.push(i);
  }

  return list;
}

function sum(numbers) {
  let numbersSum = 0;

  for (const number of numbers) {
    numbersSum += number;
  }

  return numbersSum;
}

console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
