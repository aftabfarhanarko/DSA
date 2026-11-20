

let a = 29 ;
let b = 39 ;

let c 

c = a ;
a = b ;
b = c;
c = 888;
console.log(a);
console.log(b);
console.log(c);

// Array Destructuring Assignment
[ a , c] = [ b , c ];

console.log(a,c);



a = a + b;
b = b + c;
c = a + b - c;
console.log(a);
console.log(b);
console.log(c);
