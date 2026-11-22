var p = 5;

if (p === null) {
  console.log("Cancel");
} else {
  let n = Number(p);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      var fact = 1;

      for (var i = 1; i <= n; i++) {
        fact = fact * i;
      }

      console.log(fact);
    } else {
      console.log("MM");
    }
  }
}

let number = 66;

if (number === null) {
  console.log("Invalid Number");
} else {
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}


let modul  = 50;

if(modul === null){
    console.log("Not Valied");
    
}else{
    for(let i = 2; i<= Math.floor(modul/2); i++){
        if(modul % i === 0){
            console.log(i);
            
        }
    }
}