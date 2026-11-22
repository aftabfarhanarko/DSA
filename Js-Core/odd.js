// 2. Sum of All Odd Numbers from 1 to N


let N = 20;
let sum = 0

for(let i = 1; i <= N ; i++){
    if(i % 2 != 0){
        sum += i;
    }
};

console.log(sum);
