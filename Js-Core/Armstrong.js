// 19. Armstrong Number in JavaScript
// 370 = 3^3 + 7^3 + 0^3

let num = 153;

let originalNum = num;
let sum = 0;

// Step 1: Count total digits
let digitCount = num.toString().length;

// Step 2: Extract each digit
while (num > 0) {
  let digit = num % 10;

  // Step 3: Calculate power and add
  sum += digit ** digitCount;

  // Step 4: Remove last digit
  num = Math.floor(num / 10);
}

// Step 5: Compare original number with sum
if (sum === originalNum) {
  console.log(originalNum + " is an Armstrong Number");
} else {
  console.log(originalNum + " is not an Armstrong Number");
}
