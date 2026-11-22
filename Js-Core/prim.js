// 13. Check Prime Number
const input = 4;
let isPrime = true;

if (input <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < input; i++) {
    if (input % 2 === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
