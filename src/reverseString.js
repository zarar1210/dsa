console.log("This is file for reverse string");

/*

Write a function that reverses a string. The input string is given as an array of characters s. 
You must do this by modifying the input array in-place with O(1)extra memory.

let reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
};

let str = ["h", "e", "l", "l", "o"];
console.log(reverseString(str));

Note:

We used swap technique-
let a = 20;
let b = 10;
let temp = a;
a = b; // 10
b = temp; // 20
console.log(a, b);

*/
