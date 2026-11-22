// 11. Find All Factors of a Given Number

let n = 60;
let sum = 0
for (let i = 0; i <= n; i++) {
  if  (n % i === 0) {
    sum += i
    console.log(sum);
  }
}
