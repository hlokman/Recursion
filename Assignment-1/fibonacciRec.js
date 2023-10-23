function fibsRec(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return console.log("please choose an integer at least equal to 0");
  } else if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  }

  return fibsRec(num - 1).concat(
    fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 1]
  );
}
