var p = 3;

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
};


