/*
----------------------------------------
💡 Example: Printing Star Pattern (Square)
----------------------------------------

let n = 5;

for (let i = 0; i < n; i++) {       // Outer loop → runs n times (rows)
  let row = "";
  for (let j = 0; j < n; j++) {     // Inner loop → runs n times (columns)
    row += "*";
  }
  console.log(row);
}

----------------------------------------
🧩 Explanation (when n = 5)
----------------------------------------
Outer loop (i):
- i = 0 → inner loop runs 0–4 → prints "*****"
- i = 1 → inner loop runs 0–4 → prints "*****"
- i = 2 → inner loop runs 0–4 → prints "*****"
- i = 3 → inner loop runs 0–4 → prints "*****"
- i = 4 → inner loop runs 0–4 → prints "*****"

✅ Output:
*****
*****
*****
*****
*****

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times
- Inner loop runs n times for each outer loop iteration

➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(1)


----------------------------------------
💡 Example: Printing Star Pattern (Right-Angled Triangle)
----------------------------------------

let n = 5;

for (let i = 0; i < n; i++) {       // Outer loop → controls rows
  let row = "";
  for (let j = 0; j <= i; j++) {    // Inner loop → controls stars per row
    row += "*";
  }
  console.log(row);
}

----------------------------------------
🧩 Explanation (when n = 5)
----------------------------------------
i = 0 → j = 0          → "*"
i = 1 → j = 0–1        → "**"
i = 2 → j = 0–2        → "***"
i = 3 → j = 0–3        → "****"
i = 4 → j = 0–4        → "*****"

✅ Output:
*
**
***
****
*****

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times.
- Inner loop runs i+1 times (increases each row).

Total iterations = 1 + 2 + 3 + ... + n = n(n + 1) / 2  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (due to 'row' string growing with i)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Outer loop (i): Controls **number of rows**.
- Inner loop (j): Controls **stars per row**.


----------------------------------------
💡 Example: Number Pattern (Right-Angled Triangle)
----------------------------------------

let n = 6;

for (let i = 0; i < n; i++) {       // Outer loop → controls rows
  let row = "";
  for (let j = 0; j <= i; j++) {    // Inner loop → controls numbers per row
    row += i + 1;                   // Print current row number
  }
  console.log(row.trim());
}

----------------------------------------
🧩 Explanation (when n = 6)
----------------------------------------
i = 0 → j = 0         → "1"
i = 1 → j = 0–1       → "2 2"
i = 2 → j = 0–2       → "3 3 3"
i = 3 → j = 0–3       → "4 4 4 4"
i = 4 → j = 0–4       → "5 5 5 5 5"
i = 5 → j = 0–5       → "6 6 6 6 6 6"

✅ Output:
1  
2 2  
3 3 3  
4 4 4 4  
5 5 5 5 5  
6 6 6 6 6 6  

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times.
- Inner loop runs i+1 times.

Total iterations = 1 + 2 + 3 + ... + n = n(n + 1)/2  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n)  (because `row` grows with i)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Outer loop (i): Controls **row number and printed value**.  
- Inner loop (j): Controls **how many times that number is printed**.



----------------------------------------
💡 Example: Number Triangle Pattern (Increasing Sequence)
----------------------------------------

let n = 6;

for (let i = 0; i < n; i++) {        // Outer loop → controls rows
  let row = "";
  for (let j = 0; j <= i; j++) {     // Inner loop → controls numbers per row
    row += (j + 1) + " ";            // Print numbers starting from 1
  }
  console.log(row.trim());
}

----------------------------------------
🧩 Explanation (when n = 6)
----------------------------------------
i = 0 → j = 0            → "1"
i = 1 → j = 0–1          → "1 2"
i = 2 → j = 0–2          → "1 2 3"
i = 3 → j = 0–3          → "1 2 3 4"
i = 4 → j = 0–4          → "1 2 3 4 5"
i = 5 → j = 0–5          → "1 2 3 4 5 6"

✅ Output:
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5  
1 2 3 4 5 6  

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times.
- Inner loop runs i+1 times.

Total iterations = 1 + 2 + 3 + ... + n = n(n + 1)/2  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (because 'row' grows with i)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Outer loop (i): Controls **row count**.  
- Inner loop (j): Controls **increasing number sequence** per row.
- Pattern forms a **right-angled triangle** with sequential numbers.


/*
----------------------------------------
💡 Example: Reverse Number Triangle Pattern
----------------------------------------

let n = 5;

for (let i = n; i >= 0; i--) {       // Outer loop → starts from n and decreases
  let row = "";
  for (let j = 0; j <= i; j++) {     // Inner loop → prints numbers from 1 to i+1
    row += (j + 1);
  }
  console.log(row.trim());
}

----------------------------------------
🧩 Explanation (when n = 5)
----------------------------------------
i = 5 → j = 0–5 → "1 2 3 4 5 6"  
i = 4 → j = 0–4 → "1 2 3 4 5"  
i = 3 → j = 0–3 → "1 2 3 4"  
i = 2 → j = 0–2 → "1 2 3"  
i = 1 → j = 0–1 → "1 2"  
i = 0 → j = 0   → "1"

✅ Output:
1 2 3 4 5 6  
1 2 3 4 5  
1 2 3 4  
1 2 3  
1 2  
1  

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs (n + 1) times.
- Inner loop runs (i + 1) times for each iteration.

Total iterations = (n+1)(n+2)/2 → O(n²)  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (due to 'row' growing with i)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Outer loop (i): Controls **row count** and **decreases each time**.  
- Inner loop (j): Controls **increasing numbers** in each row.  
- Pattern prints a **reverse right-angled triangle** of numbers.


----------------------------------------
💡 Example: Reverse Number Triangle (Decreasing Pattern)
----------------------------------------

let n = 5;

for (let i = 0; i < n; i++) {          // Outer loop → controls row count
  let row = "";
  for (let j = i; j < n; j++) {        // Inner loop → decreases each row
    row += (i + 1) + " ";
  }
  console.log(row.trim());
}

----------------------------------------
🧩 Explanation (when n = 5)
----------------------------------------
i = 0 → j = 0–4 → "1 1 1 1 1"  
i = 1 → j = 1–4 → "2 2 2 2"  
i = 2 → j = 2–4 → "3 3 3"  
i = 3 → j = 3–4 → "4 4"  
i = 4 → j = 4   → "5"

✅ Output:
1 1 1 1 1  
2 2 2 2  
3 3 3  
4 4  
5

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times.
- Inner loop runs (n - i) times.

Total iterations = n + (n-1) + (n-2) + ... + 1 = n(n + 1)/2  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (due to 'row' growing with i)

----------------------------------------
🎯 Key Concept
----------------------------------------
- Outer loop (i): Controls the number being printed.  
- Inner loop (j): Controls how many times the number repeats.  
- The count of numbers **decreases** each row.


----------------------------------------
💡 Example: Combined Star Pattern (Upward + Downward Triangle)
----------------------------------------

let n = 5;

// 🔼 Upper Triangle
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 🔽 Lower Triangle
for (let i = 6; i >= 0; i--) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

----------------------------------------
🧩 Explanation
----------------------------------------
🔼 First Loop (Upward):
i = 0 → "*"  
i = 1 → "**"  
i = 2 → "***"  
i = 3 → "****"  
i = 4 → "*****"

🔽 Second Loop (Downward):
i = 6 → "*******"  
i = 5 → "******"  
i = 4 → "*****"  
i = 3 → "****"  
i = 2 → "***"  
i = 1 → "**"  
i = 0 → "*"

✅ Output:
*
**
***
****
*****
*******
******
*****
****
***
**
*

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Each half has nested loops (one increasing, one decreasing).  
- Total operations ≈ n² + n² → still **O(n²)**.  
➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (temporary 'row' string)

----------------------------------------
🎯 Key Concept
----------------------------------------
- **Outer loop** controls how many lines to print.  
- **Inner loop** controls how many stars per line.  
- First part builds the triangle upward, second part downward.


----------------------------------------
💡 Example: Right-Aligned Half Pyramid
----------------------------------------

let n = 6;

for (let i = 0; i < n; i++) {          // Outer loop → controls rows
  let row = "";

  // Print leading spaces (decreasing count)
  for (let j = n - 1; j > i; j--) {
    row += " ";
  }

  // Print stars (increasing count)
  for (let k = 0; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}

----------------------------------------
🧩 Explanation (when n = 6)
----------------------------------------
i = 0 → "     *"
i = 1 → "    **"
i = 2 → "   ***"
i = 3 → "  ****"
i = 4 → " *****"
i = 5 → "******"

✅ Output:
     *
    **
   ***
  ****
 *****
******

----------------------------------------
📊 Complexity Analysis
----------------------------------------
- Outer loop runs n times.
- Inner loops together run roughly n(n + 1)/2 times.

➡️ **Time Complexity:** O(n²)  
➡️ **Space Complexity:** O(n) (temporary 'row' string)

----------------------------------------
🎯 Key Concept
----------------------------------------
- **First inner loop:** prints spaces → makes the pattern right-aligned.  
- **Second inner loop:** prints stars → increases with each row.  
- Together they form a **right-angled triangle aligned to the right**.
*/
