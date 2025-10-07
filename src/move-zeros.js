console.log("Welome in Move Zeros");

let moveZeros = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[x] = 0;
  }
  return nums;
};

let arr = [1, 0, 2, 3];
console.log(moveZeros(arr));
