console.log("Loops");
/*
Write the function that search the element from the
array and retrun the index, if the element not present then it will return -1

let arr = [3, 4, 2, 8, 9, 6];
function searchElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement(arr, 7));

Write the function that return -v counts in an array.

let arr = [1, 2, 3, -5, -3, -2];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegative(arr));

Write the function that return the largest value in an array;
*/

let arr = [1, 2, 3, 4, 8, 2, 16];

function largestValue(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestValue(arr));
