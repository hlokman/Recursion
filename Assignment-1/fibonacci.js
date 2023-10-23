function fibonacci(num) {
  let result = [0, 1];
  if (num < 0 || !Number.isInteger(num)) {
    return console.log("please choose an integer at least equal to 0");
  } else if (num === 0) {
    return [0];
  } else if (num === 1) {
    return result;
  }

  for (let i = 2; i <= num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(13));
console.log(fibonacci(-2));
console.log(fibonacci("foo"));
