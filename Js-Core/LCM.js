// 21. Find LCM of Two Numbers in JavaScript

let num1 = 12;
let num2 = 18;

// Find the bigger number
let max = Math.max(num1, num2);

// Start checking from bigger number
let lcm = max;

while (true) {
  if (lcm % num1 === 0 && lcm % num2 === 0) {
    break;
  }

  lcm += max;
}

console.log("LCM:", lcm);
