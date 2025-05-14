function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countBs("Button, Bottom, Boobie"));
