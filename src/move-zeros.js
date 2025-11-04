console.log("Welome in Move Zeros");
/*
let moveZeros = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
let arr = [1, 0, 2, 0, 1, 8];
console.log(moveZeros(arr));*/

let moveZeros = function (arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[x] = 0;
  }
  return arr;
};
let arr = [1, 2, 0, 2, 5];
let result = moveZeros(arr);
console.log(result);
