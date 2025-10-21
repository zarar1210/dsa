let arr = [1, 4, 5, 8, 0, 2];

function sum(n) {
  if (n == 0) return arr[n]; // this is base case
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));
