let a = 12 ;
let b = 22 ;

let c = a + b + a++ + b++ + ++b;
console.log("A", a);
console.log("B", b);
console.log("C", c);