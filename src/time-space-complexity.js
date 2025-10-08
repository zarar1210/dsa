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
*/
