let n = 123456;
let revers = 0;

while (n > 0) {
  let digite = n % 10;

  revers = revers * 10 + digite;

  n = Math.floor(n / 10);
}

console.log(revers);
