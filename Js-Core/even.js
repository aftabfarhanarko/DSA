// 1. Sum of All Even Numbers from 1 to N
// Time Complexity: \(O(N)\)
// Space Complexity: \(O(1)\)

let n = 30;

let sum = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    sum += i;
  }
}
console.log(sum);
