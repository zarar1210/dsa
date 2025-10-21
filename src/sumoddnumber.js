let arr = [1, 2, 3, 4, 5, 6, , 7];

function sumOddNumber(n) {
  if (n < 0) return 0;
  if (arr[n] && arr[n] % 2 !== 0) {
    return arr[n] + sumOddNumber(n - 1);
  }
  return sumOddNumber(n - 1);
}

console.log(sumOddNumber(arr.length - 1));
