// 6. JavaScript Math Methods – Quick Revision Table
// Method	কাজ
// Math.abs()	Absolute value
// Math.round()	Nearest integer
// Math.floor()	Round down
// Math.ceil()	Round up
// Math.trunc()	Remove decimal
// Math.max()	Largest number
// Math.min()	Smallest number
// Math.pow()	Power
// Math.sqrt()	Square root
// Math.cbrt()	Cube root
// Math.random()	Random number
// Math.sign()	Number sign
// Math.hypot()	Hypotenuse
// Math.sin()	Sine
// Math.cos()	Cosine
// Math.tan()	Tangent
// Math.log()	Natural logarithm
// Math.log10()	Log base 10
// Math.log2()	Log base 2
// Math.exp()	Exponential
// Math.fround()	Float32 conversion
// Math.imul()	32-bit multiplication
// Math.clz32()	Leading zero bits
// Math.atan()	Inverse tangent
// Math.atan2()	Two-argument inverse tangent
// Math.asin()	Inverse sine
// Math.acos()	Inverse cosine
// Math.expm1()	Exponential minus 1
// Math.log1p()	Logarithm of 1 + x


// 2. Math.round()

console.log(Math.round(101.6));

// 3. Math.floor()

console.log(Math.floor(23.8));

// 4. Math.ceil()
// Definition: Rounds a number up to the nearest integer.

console.log(Math.ceil(2.01));
console.log(Math.ceil(7.0002));

// 5. Math.trunc()
// Definition: Removes the decimal part of a number without rounding.

console.log(Math.trunc(9.99999));
console.log(Math.trunc(-344.99999));

// B. Maximum and Minimum Methods
// 6. Math.max()
// Definition: Returns the largest number.

console.log(Math.max(34, 56, 76, 876, 8, 3, 23, 21, 321, 3, 2, 34, 34));
console.log(Math.max(-34, -56, -76, -87, -98));

// 7. Math.min()
// Definition: Returns the smallest number.

console.log(Math.min(56, 67, 67, 56, 2, 331, 3));
console.log(Math.min(10, 20, 30, 40)); // 10
console.log(Math.min(5, 100, 25)); // 5

// 8. Math.max() with Array

const array1 = [23, 54, 65, 57, 6, 6, 67, 99];

console.log(Math.max(...array1));

// 9. Math.min() with Array

const arry2 = [45, 56, 5, 6767, 323, 323];

console.log(Math.min(...arry2));

// C. Power and Square Root Methods
// 10. Math.pow()
// Definition: Returns a number raised to the power of another number.

console.log("Arko", Math.pow(3, 5));
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(10, 3)); // 1000

// 11. Math.sqrt()
// Definition: Returns the square root of a number.

console.log(Math.sqrt(45));
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(100)); // 10

// 12. Math.cbrt()
// Definition: Returns the cube root of a number.

console.log(Math.cbrt(9));
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(125)); // 5

// 13. Math.hypot()
// Definition: Returns the square root of the sum of squares of its arguments.

console.log(Math.hypot(366, 4));
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(5, 12)); // 13

// D. Random Number Methods
// 14. Math.random()
// Definition: Returns a random decimal number between 0 (inclusive) and 1 (exclusive).

console.log("Randem Number", Math.random());

// 15. Random Integer (1–10)

const radn = Math.floor(Math.random() * 10) + 1;

console.log(" Random Integer (1–10)", radn);

// Level 2 – Intermediate
// Question 11: Calculate the area of a circle.

// Formula: π × radius²

const radius = 1;
const area = Math.PI * Math.pow(radius, 2);
console.log("Area ", area);

const readuis = 3;

const area2 = Math.PI * Math.pow(readuis, 2);
console.log("second area", area2);

// Question 12: Calculate the area of a square.

// Formula: side × side

const square = 100;

const area3 = Math.pow(square, 2);
console.log(area3);

// Question 13: Calculate the area of a rectangle.

// Formula: length × width

const liength = 20;
const width = 2;

const area4 = liength * width;
console.log(area4);

// Question 14: Calculate the cube of a number.
const num = 4;

console.log(Math.pow(num, 3));

// Output: 64

// Question 15: Find the cube root.

const root = 216;

const cubet = Math.cbrt(root);
console.log("Cubet", cubet);

// Question 16: Find the distance between two points.

// Formula: √((x2 − x1)² + (y2 − y1)²)

const x1 = 2;
const x2 = 4;

const y1 = 6;

const y2 = 8;
const distance = Math.hypot(x1 - x2, y1 - y2);
console.log("Distance", distance);

// Question 17: Find the average of numbers.
const numbers = [23, 34, 45, 56, 67, 68, 77, 79, 89, 90];

const sum = numbers.reduce((total, num) => total + num, 0);
const average = sum / numbers.length;

console.log("Average", average);

// Question 20: Calculate the hypotenuse of a right triangle.
const a = 3;
const b = 4;

const c = Math.sqrt(a ** 2 + b ** 2);

console.log(c);

// Output: 5

// Level 3 – Advanced
// Question 21: Find the second-largest unique number in an array.

const number = [10, 50, 30, 80, 80, 20, 89];

const uniqueNumbers = [...new Set(number)];

uniqueNumbers.sort((a, b) => b - a);

console.log(uniqueNumbers[1]);

// Output: 50

// Question 22: Find the highest and lowest values.
const numbe = [10, 5, 80, 20, 100, 2];

const highest = Math.max(...numbe);
const lowest = Math.min(...numbe);

console.log("Highest:", highest);
console.log("Lowest:", lowest);

// Highest: 100
// Lowest: 2

// Question 23: Round a number to two decimal places.
const price = 123.45678;

const result = Math.round(price * 100) / 100;

console.log(result);

// Level 3 – Advanced
// Question 21: Find the second-largest unique number in an array.
const myarra = [55, 67, 78, 99, 11, 88];
const unqui = [...new Set(myarra)];
unqui.sort((a, b) => b - a);
console.log("Array second Largest Number", unqui[1]);

// Question 22: Find the highest and lowest values.
const numbersa = [45, 56, 67, 78, 34, 45, 4, 23, 1];

const high = Math.max(...numbersa);

const wtrtet = Math.min(...numbersa);
console.log("Higst Number", high);
console.log("Logest Number", wtrtet);

// Question 23: Round a number to two decimal places.
const prices = 123.6788;
const resultes = Math.round(prices * 100) / 100;

console.log(resultes);

// Question 24: Check whether a number is a perfect square.

function isPerfectSquear(sum) {
  if (sum < 0) return false;

  const roots = Math.sqrt(sum);

  return Number.isInteger(roots);
}

console.log("Is Perfect Squear 1", isPerfectSquear(15));
console.log("Is Perfect Squear 2", isPerfectSquear(26));

// Question 25: Generate a random password number (6 digits).
const password = Math.floor(100000 + Math.random() * 90000);

console.log(" 6 Digits Password", password);

// Question 26: Calculate compound interest.
// Formula: A = P(1 + r/n)^(nt)

// ⚠️ Potential Bug in the Formula

// The standard compound interest formula is \(A = P(1 + \frac{r}{n})^{n \times t}\), where the compounding frequency is multiplied by the number of years.
// In your code, you divided (time / year) instead of multiplying (time * year). Because of this, the code actually calculated the interest for half a year (\(0.5\)) instead of 2 years.

const pricentenc = 10000;
const rate = 0.5;
const time = 1;
const year = 2;
const amountsa = pricentenc * Math.pow(1 + rate / time, time * year);
// Outputs: Amounts 22500.00

console.log("Amounts", amountsa.toFixed(2));

// Question 27: Calculate the volume of a sphere.
// Formula: 4/3 × π × r³

const reduice = 6;
const vaule = (4 / 3 ) *  Math.PI * Math.pow(reduice, 3)

console.log(Number(vaule.toFixed(4)));

// Question 28: Find the distance between two points using Pythagoras.

const ab = 6;
const bc = 8;

const resulta = Math.hypot(ab, bc);

console.log(resulta);

// Output: 10

// Question 29: Convert degrees to radians.

function degreesToRadians(degaree) {
     return degaree * (Math.PI / 180)
}
console.log(degreesToRadians(180));


// Question 30: Find the median of an array.

function findMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);

    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

console.log(findMedian([10, 20, 30, 40, 50]));
// Output: 30

console.log(findMedian([10, 20, 30, 40]));
// Output: 25


// Output: 123.46

// 6. JavaScript Math Methods – Quick Revision Table
// Method	কাজ
// Math.abs()	Absolute value
// Math.round()	Nearest integer
// Math.floor()	Round down
// Math.ceil()	Round up
// Math.trunc()	Remove decimal
// Math.max()	Largest number
// Math.min()	Smallest number
// Math.pow()	Power
// Math.sqrt()	Square root
// Math.cbrt()	Cube root
// Math.random()	Random number
// Math.sign()	Number sign
// Math.hypot()	Hypotenuse
// Math.sin()	Sine
// Math.cos()	Cosine
// Math.tan()	Tangent
// Math.log()	Natural logarithm
// Math.log10()	Log base 10
// Math.log2()	Log base 2
// Math.exp()	Exponential
// Math.fround()	Float32 conversion
// Math.imul()	32-bit multiplication
// Math.clz32()	Leading zero bits
// Math.atan()	Inverse tangent
// Math.atan2()	Two-argument inverse tangent
// Math.asin()	Inverse sine
// Math.acos()	Inverse cosine
// Math.expm1()	Exponential minus 1
// Math.log1p()	Logarithm of 1 + x
