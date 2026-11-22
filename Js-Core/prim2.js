// Time Complexity: \(O(N^2)\) — এই Basic Nested Loop-এর Worst Case।

// Space Complexity: \(O(1)\) — অতিরিক্ত কোনো বড় Data Structure ব্যবহার করা হয়নি।

let n = 8;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}


