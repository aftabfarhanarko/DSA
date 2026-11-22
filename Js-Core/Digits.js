// 6. Sum of Digits (JavaScript)
// 6. Sum of Digits

let number = 56789;
let sum = 0;

while (number > 0) {
  // Step 1: Get Last Digit
  let digit = number % 10;

  // Step 2: Add Digit to Sum
  sum += digit;

  // Step 3: Remove Last Digit
  number = Math.floor(number / 10);
}

console.log(sum);
