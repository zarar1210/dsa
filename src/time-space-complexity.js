/*
----------------------------------------
💡 Time Complexity
----------------------------------------
- Used to measure the efficiency of an algorithm in terms of **speed** as the input size grows.
- It tells how the **execution time** increases with respect to input size (n).

----------------------------------------
🔹 Example 1: Linear Search
----------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 1];

If we want to search for 5 in the array:
- The loop iterates through each element until the target is found.
- Once found, the loop stops.
- In the worst case, the loop runs `n` times.

Examples:
- n = 10 → 10 iterations
- n = 100 → 100 iterations

➡️ Time Complexity: O(n)

----------------------------------------
🔹 Example 2: Binary Search
----------------------------------------
let arr = [1, 2, 3, 4, 5, 10, 15];  // must be sorted

Binary Search works by repeatedly dividing the array into two halves:
- Compare the middle element with the target.
- If the target is greater, search the right half.
- If smaller, search the left half.
- Continue dividing until the element is found or array becomes empty.

Steps:
n → n/2 → n/4 → n/8 ... until 1

Formula:
n / 2^x = 1  
⟹ n = 2^x  
⟹ x = log₂(n)

Examples:
- n = 10 → ~3 iterations  
- n = 100 → ~7 iterations

➡️ Time Complexity: O(log n)

----------------------------------------
🔸 Conclusion
----------------------------------------
1. Linear Search → Less efficient (O(n))
2. Binary Search → More efficient (O(log n))

----------------------------------------
⚙️ Big O Notation
----------------------------------------
- Represents the **worst-case** performance of an algorithm.

🔸 Best & Worst Cases:

Linear Search:
- Best Case → Element found at 1st position → O(1)
- Worst Case → Element not present → O(n)

Binary Search:
- Best Case → Element found in first comparison → O(1)
- Worst Case → Element not present → O(log n)



O(n): Linear Search 
    - for(let i=0; i<n;i++){
      run each element , it means n operation
      x=n;
    }

----------------------------------------
💡 Common Time Complexities
----------------------------------------

🔹 O(log n) → Binary Search
----------------------------------------
- Example: Binary Search divides the array in half each time.
- Sequence: n → n/2 → n/4 → ... → 1
- Number of divisions = log₂(n)

✅ Time Complexity: O(log n)

----------------------------------------
🔹 O(n²) → Nested Loops
----------------------------------------
Example:
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Runs 'n' times for each 'i'
  }
}

- Outer loop runs 'n' times.
- Inner loop runs 'n' times for each outer iteration.
➡️ Total iterations = n * n = n²

✅ Time Complexity: O(n²)


🔹 O(n³) → Triple Nested Loops
----------------------------------------
Example:
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // Runs 'n³' times
    }
  }
}
➡️ Total iterations = n * n * n = n³

✅ Time Complexity: O(n³)

----------------------------------------
🔹 O(2ⁿ) → Exponential Time
----------------------------------------
- Typically found in recursive algorithms (e.g., Fibonacci, subsets).
- Each step doubles the number of operations.

Examples:
n = 2 → 2² = 4 operations  
n = 3 → 2³ = 8 operations  
n = 4 → 2⁴ = 16 operations

Okay 👇 simple explanation —

`2ⁿ` means **2 multiplied by itself n times**

| n | 2ⁿ | Loop runs this many times |
| - | -- | ------------------------- |
| 1 | 2  | 2 times                   |
| 2 | 4  | 4 times                   |
| 3 | 8  | 8 times                   |
| 4 | 16 | 16 times                  |
| 5 | 32 | 32 times                  |

So in code 👇

```js
function exponentialLoop(n) {
  for (let i = 0; i < 2 ** n; i++) {
    console.log(i);
  }
}
exponentialLoop(5);  // runs 32 times
```

💡 `2⁵` (2 power 5) = 2×2×2×2×2 = **32**.


✅ Time Complexity: O(2ⁿ)

----------------------------------------
🔹 O(n!) → Factorial Time
----------------------------------------
- Found in permutation-based problems (e.g., Traveling Salesman).
- Grows extremely fast — worst for large n.

Example:
n = 3 → 3! = 6 operations  
n = 4 → 4! = 24 operations

✅ Time Complexity: O(n!)

----------------------------------------
🔹 O(1) → Constant Time
----------------------------------------
- Execution time does **not** depend on input size.
- Performs a fixed number of operations.

Examples:
n = 10 → 1 operation  
n = 100 → 1 operation  
n = 1000 → 1 operation

Code Example:
let arr = [10, 20, 30, 40, 50];
console.log(arr[4]); // Accessing index 4 takes constant time

✅ Time Complexity: O(1)

O(nlogn)-> 

order (best → worst) for time and space complexity:

O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)


Space Complexity: How much space extra you are using 

/*
----------------------------------------
💡 Example 1: Accessing 5th Element from Array
----------------------------------------
function getElement(arr) {
  return arr[5];
}

✅ Time Complexity: O(1)  
✅ Space Complexity: O(1)
- Accessing an element by index takes constant time.
- No extra space is used.
*/

/*
💡 Example 2: Doubling Array Elements
----------------------------------------
function doubleArr(arr) {
  let n = arr.length;
  let newArr = new Array(n); // extra array of size n

  for (let i = 0; i < n; i++) {
    newArr[i] = arr[i] * 2;
  }

  return newArr;
}

✅ Time Complexity: O(n)
   - Loop runs once for each element.

✅ Space Complexity: O(n)
   - New array of size n is created.


 if have 2 loop and running seperately
 for(let i=0;i<n;i++){
 }
 for(let j=0;j<n;j++){
 }

 Time complexity: n+n=2n: O(2n) You will alway number here and say the Time complexity: O(n) ?

 Example:

 for(let 1...n){
    for (let 1..10){
                       // n*n=n**2
    }
 }
for(let i...10){
                      // n
}

Time complexity is O(n**2+n) => O(n**n)
 
*/
