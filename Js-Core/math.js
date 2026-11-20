// // 2. Math.round()

// console.log(Math.round(101.6));


// // 3. Math.floor()

// console.log(Math.floor(23.8));


// // 4. Math.ceil()
// // Definition: Rounds a number up to the nearest integer.

// console.log(Math.ceil(2.01));
// console.log(Math.ceil(7.0002));


// // 5. Math.trunc()
// // Definition: Removes the decimal part of a number without rounding.

// console.log(Math.trunc(9.99999));
// console.log(Math.trunc(-344.99999));

// // B. Maximum and Minimum Methods
// // 6. Math.max()
// // Definition: Returns the largest number.


// console.log(Math.max(34,56,76,876,8,3,23,21,321,3,2,34,34));
// console.log(Math.max(-34,-56,-76,-87,-98));

// // 7. Math.min()
// // Definition: Returns the smallest number.

// console.log(Math.min(56,67,67,56,2,331,3));
// console.log(Math.min(10, 20, 30, 40)); // 10
// console.log(Math.min(5, 100, 25));     // 5


// // 8. Math.max() with Array

// const array1 = [23,54,65,57,6,6,67,99]

// console.log(Math.max(...array1));

// // 9. Math.min() with Array

// const arry2 = [45,56,5,6767,323,323];

// console.log(Math.min
//     (...arry2)
// );

// // C. Power and Square Root Methods
// // 10. Math.pow()
// // Definition: Returns a number raised to the power of another number.

// console.log("Arko",Math.pow(3,5));
// console.log(Math.pow(2, 3));  // 8
// console.log(Math.pow(5, 2));  // 25
// console.log(Math.pow(10, 3)); // 1000


// // 11. Math.sqrt()
// // Definition: Returns the square root of a number.

// console.log(Math.sqrt(45) )
// console.log(Math.sqrt(25));  // 5
// console.log(Math.sqrt(64));  // 8
// console.log(Math.sqrt(100)); // 10

// // 12. Math.cbrt()
// // Definition: Returns the cube root of a number.

// console.log(Math.cbrt(9));
// console.log(Math.cbrt(8));    // 2
// console.log(Math.cbrt(27));   // 3
// console.log(Math.cbrt(125));  // 5


// // 13. Math.hypot()
// // Definition: Returns the square root of the sum of squares of its arguments.

// console.log(Math.hypot(366,4));
// console.log(Math.hypot(3, 4)); // 5
// console.log(Math.hypot(5, 12)); // 13



// // D. Random Number Methods
// // 14. Math.random()
// // Definition: Returns a random decimal number between 0 (inclusive) and 1 (exclusive).

// console.log("Randem Number",Math.random());


// // 15. Random Integer (1–10)

// const radn = Math.floor(Math.random() * 10) + 1;

// console.log(" Random Integer (1–10)", radn);


// Level 2 – Intermediate
// Question 11: Calculate the area of a circle.

// Formula: π × radius²

const radius =  1;
const area = Math.PI * Math.pow(radius , 2);
console.log("Area ", area);


const readuis = 3 ;

const area2 = Math.PI * Math.pow(readuis, 2)
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

const root = 216 ;

const cubet = Math.cbrt(root);
console.log("Cubet", cubet);

// Question 16: Find the distance between two points.

// Formula: √((x2 − x1)² + (y2 − y1)²)
