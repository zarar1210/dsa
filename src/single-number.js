console.log("Welcome in Single Number");

/*
Problem Statement:
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

result = 0 ^ 1 = 1
result = 1 ^ 2 = 3
result = 3 ^ 3 = 0   ← (same numbers cancel)
result = 0 ^ 4 = 4
result = 4 ^ 3 = 7
result = 7 ^ 4 = 3
result = 3 ^ 2 = 1   ← final result


let arr = [1, 2, 3, 4, 3, 4, 2];
let result = 0;
for (let num of arr) {
  result ^= num;
}
console.log(result);

*/
