console.log("Linear-Search");

let arr = [1, 5, 6, 2, 9];
let target = 6;
function linerSerarch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linerSerarch(arr, target));
