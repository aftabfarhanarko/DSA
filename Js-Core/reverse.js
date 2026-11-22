// 15. Reverse a Number

const n = 123459;
let reverse = 0;
let number = n;

while (number > 0) {
  // Step 1: Last digit
  let digit = number % 10;

  reverse = reverse * 10 + digit;

  number = Math.floor(number / 10);
}
console.log(reverse);
