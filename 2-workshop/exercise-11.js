function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // ref: https://programmerclick.com/article/74372221208/
  for (let i = 1; i <= 8; i++) {
    var str = "";
    var off = i % 2;
    for (let j = 1; j <= 8; j++) {
      if (off) {
        str += "#";
      } else {
        str += "_";
      }
      off = !off;
    }
    console.log(str);
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
// yarn test exercise-11
exercise11();
module.exports = exercise11;
