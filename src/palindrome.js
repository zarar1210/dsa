console.log("Welcome to Palindrome");

/*
Quick Note:
1. To Remove last : n/10
2. To Remove last digit: n%10


let palindrome = function (n) {
  let original = n;
  let rev = 0; // 1 12
  while (n > 0) {
    // console.log(n);
    let reminder = n % 10; //  it will give us what is left after reminder - 1
    console.log(reminder); // 1 2 ,1
    rev = 10 * rev + reminder; //   1, 10*1+2=12 ,  121
    n = Math.floor(n / 10); // It will remove last digit like 1211 to 121  1 0
  }
  return rev === original;
};
let n = 121;
let result = palindrome(n);
//console.log(result);
*/
