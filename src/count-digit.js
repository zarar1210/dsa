console.log("Count Digit");

function countDigit(n) {
  let count = 0;
  if (n == 0) {
    return 1;
  }
  n = Math.abs(n); // It will change -ve number to -ve if passed in param
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let n = -343;
let res = countDigit(n);
console.log(res);

/*
Quick Note:
1. Math.floor(10.1 or 8 or any .1 to .9) : 10  It rounds down the value 
2. Math.round(10.1)->10, 10.9->11; 
3. Math.ceil(10.9) -> 11, 10.2->11, 10.001->11 It rounds up the value
4. Math.abs(n)-> Change it number -ve to +ve;(Handling the -ve number) 
*/
