const size = 8;

for (let x = 0; x < size; x++) {
  let row = "";

  for (let y = 0; y < size; y++) {
    const isHash = (x + y) % 2 == 0;

    if (isHash) {
      row += "#";
    } else {
      row += " ";
    }
  }

  console.log(row);
}
