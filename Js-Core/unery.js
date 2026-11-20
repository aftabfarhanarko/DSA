// ==========================================
// JAVASCRIPT UNARY OPERATORS
// Complete Practice
// ==========================================

// 1. Unary Operator with Boolean
console.log("1. Boolean Increment");

let booleanValue = true;

booleanValue++;

console.log(booleanValue); // 2
console.log(typeof booleanValue); // number

// 2. Unary Plus (+)
// Converts a value into a Number

console.log("\n2. Unary Plus");

let str = "100";
let boolTrue = true;
let boolFalse = false;

console.log(+str); // 100
console.log(+boolTrue); // 1
console.log(+boolFalse); // 0
console.log(+"Hello"); // NaN

// 3. Unary Negation (-)
// Converts a value into a Number and makes it negative

console.log("\n3. Unary Negation");

let num = 10;
let bool = true;
let stringNum = "20";

console.log(-num); // -10
console.log(-bool); // -1
console.log(-stringNum); // -20

// 4. Pre-Increment (++a)
// Increment first, then return the value

console.log("\n4. Pre-Increment");

let preInc = 10;

console.log(++preInc); // 11
console.log(preInc); // 11

// 5. Post-Increment (a++)
// Return current value first, then increment

console.log("\n5. Post-Increment");

let postInc = 10;

console.log(postInc++); // 10
console.log(postInc); // 11

// 6. Pre-Decrement (--a)
// Decrement first, then return the value

console.log("\n6. Pre-Decrement");

let preDec = 10;

console.log(--preDec); // 9
console.log(preDec); // 9

// 7. Post-Decrement (a--)
// Return current value first, then decrement

console.log("\n7. Post-Decrement");

let postDec = 10;

console.log(postDec--); // 10
console.log(postDec); // 9

// 8. Logical NOT (!)
// Converts value into Boolean and reverses it

console.log("\n8. Logical NOT");

let truthy = true;
let falsy = false;
let zero = 0;
let one = 1;

console.log(!truthy); // false
console.log(!falsy); // true
console.log(!zero); // true
console.log(!one); // false

// 9. Bitwise NOT (~)
// Inverts the bits of a 32-bit integer

console.log("\n9. Bitwise NOT");

let bitOne = 5;
let bitTwo = 10;

console.log(~bitOne); // -6
console.log(~bitTwo); // -11

// 10. typeof Operator
// Returns the data type

console.log("\n10. typeof Operator");

let age = 25;
let name = "Aftab";
let isDeveloper = true;
let unknown;

console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isDeveloper); // boolean
console.log(typeof unknown); // undefined

// 11. void Operator
// Always returns undefined

console.log("\n11. void Operator");

let value = 10;

console.log(void value); // undefined
console.log(void (10 + 20)); // undefined

// 12. delete Operator
// Deletes an object's property

console.log("\n12. delete Operator");

let user = {
  name: "Aftab",
  age: 25,
  profession: "Backend Developer",
};

delete user.age;

console.log(user);
// { name: "Aftab", profession: "Backend Developer" }

// ==========================================
// END OF UNARY OPERATORS
// ==========================================
