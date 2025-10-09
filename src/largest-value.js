console.log("Welcome to Largest Value");

/*
----------------------------------------
💡 Example: Find Largest Value in an Array
----------------------------------------

let findLargestValue = function (ele) {
  let largest = -Infinity;            // Initialize with smallest possible value

  for (let i = 0; i < ele.length; i++) {  // Loop through array elements
    if (ele[i] > largest) {               // Compare current element with largest
      largest = ele[i];                   // Update if a larger value is found
    }
  }

  return largest;                         // Return the largest value
};

// Example
let arr = [-10, -2, -8];
console.log(findLargestValue(arr)); // Output: -2

----------------------------------------
🧩 Explanation
----------------------------------------
Array: [-10, -2, -8]

Step-by-step:
- Start: largest = -Infinity
- i = 0 → -10 > -Infinity → largest = -10
- i = 1 → -2 > -10 → largest = -2
- i = 2 → -8 > -2 ❌ (no change)

✅ Final largest value = -2

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs through all n elements once.

➡️ **Time Complexity:** O(n)  
➡️ **Space Complexity:** O(1)

----------------------------------------
🎯 Key Concept
----------------------------------------
- One-pass comparison algorithm.  
- Efficient because it checks each element only once.  
- Works with both positive and negative numbers.
*/
