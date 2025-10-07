console.log("Missing Number");

let missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
};

let arr = [3, 0, 1];
console.log(missingNumber(arr));
