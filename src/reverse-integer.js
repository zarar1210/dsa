console.log("Welcome to revese integer");

/*
Quick Notes:
1. Signed 32 bit integer: It should come under this range
2. Calculate of power : Math.pow(2, 31)
*/

let reverseInteger = function (n) {
  let nCopy = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let reminder = n % 10;
    rev = 10 * rev + reminder;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return nCopy < 0 ? -rev : rev;
};
let n = 123;
let result = reverseInteger(n);
console.log(result);
