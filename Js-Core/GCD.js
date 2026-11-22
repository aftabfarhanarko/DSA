let num1 = 22;
let num2 = 42;

let gcd = 1;

// Find the smaller number
let min = Math.min(num1, num2);

// Check common divisors
for (let i = 1; i <= min; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    gcd = i;
  }
}

console.log("GCD:", gcd);
