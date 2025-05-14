function isEven(num) {
  const positiveNum = Math.abs(num);

  if (positiveNum === 0) return true;
  if (positiveNum === 1) return false;

  return isEven(positiveNum - 2);
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
