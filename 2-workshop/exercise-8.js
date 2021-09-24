function exercise8() {
  // Exercise 8
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let sum = 0
  for(let i = 0; i <= 5000; i+=4) {
    sum += i;
    //console.log(`I is ${i} and the current sum is ${sum}`);
  }
  console.log(`The sum is ${sum}`);
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
// yarn test exercise-8
exercise8()
module.exports = exercise8;
