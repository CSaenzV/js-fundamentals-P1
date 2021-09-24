function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
// REF: https://es.stackoverflow.com/questions/98287/numeros-primos-en-javascript/327338
  var retdata = "";

  for (var j = 2; j <= 200; j++) {
  
    if (prime(j)) {

      if (retdata.length==0){
        retdata = j;
      } else {
        retdata = retdata + ', ' + j
      }
      
    }
    
  }
  
  console.log(retdata);
  
  
  function prime(number) {
  
    for (var i = 2; i < number; i++) {
  
      if (number % i === 0) {
        return false;
      }
  
    }
  
    return number !== 1;
  }

  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12
exercise12()
module.exports = exercise12;
