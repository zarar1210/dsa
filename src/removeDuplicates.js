console.log("Welcome JS code");
/*
Problem statement - https://namastedev.com/learn/namaste-dsa/remove-duplicates-dsa-notes
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such 
that each unique element appears only once. The relative order of the
elements should be kept the same. Then return the number of unique elements in nums.

LeetCode:26
* Sorted in non-decreasing order : Increasing with duplicates element.
* In- Place : Need to changes in existing array
* This is like array traversal
* x is pointer which will maintian the position where we need to add the unique element.

      x->  x  x
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      i->  0  1  2  3  4  5  6  7  8  9
let x = 0;
let removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
console.log(removeDuplicates(arr));

Note:
let len = removeDuplicates(arr);
console.log(arr.slice(0, len)); // prints unique values
*/
