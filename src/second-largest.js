console.log("Welcome to second largest value");

/*
----------------------------------------
💡 Example: Find Second Largest Value in an Array
----------------------------------------

let secondLargest = function (ele) {
  let largestEle = -Infinity;         // Store largest element
  let secondLargestEle = -Infinity;   // Store second largest element

  for (let i = 0; i < ele.length; i++) {
    if (ele[i] > largestEle) {            // Found new largest
      secondLargestEle = largestEle;      // Update second largest
      largestEle = ele[i];                // Update largest
    }
    // Optionally, handle when element lies between the two
    else if (ele[i] > secondLargestEle && ele[i] < largestEle) {
      secondLargestEle = ele[i];
    }
  }

  return secondLargestEle;
};

// Example
let arr = [2, 3, 5, 1, 8, 5, 10, 11];
console.log(secondLargest(arr)); // Output: 10

----------------------------------------
🧩 Explanation
----------------------------------------
Array: [2, 3, 5, 1, 8, 5, 10, 11]

Step-by-step:
- Start: largest = -∞, secondLargest = -∞  
- 2 → largest = 2  
- 3 → largest = 3, secondLargest = 2  
- 5 → largest = 5, secondLargest = 3  
- 1 → no change  
- 8 → largest = 8, secondLargest = 5  
- 5 → no change  
- 10 → largest = 10, secondLargest = 8  
- 11 → largest = 11, secondLargest = 10  

✅ Final Output: 10

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Single loop → checks all elements once.

➡️ **Time Complexity:** O(n)  
➡️ **Space Complexity:** O(1)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Keep track of two values (`largest` and `secondLargest`).  
- Update both correctly during iteration.  
- Works efficiently without sorting or extra arrays.
*/

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let flg = -Infinity;
  let slg = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > flg) {
      slg = flg;
      flg = arr[i];
    } else if (arr[i] > slg && arr[i] != flg) {
      slg = arr[i];
    }
  }
  return slg;
}

let arr = [1, 3, 4, 4];
let res = secondLargest(arr);
console.log(res);
