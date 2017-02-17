// Create a new function called efficient below the current function that returns
// the same values as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}
function mystery(x,y){
  return (4*x*y)+(3*y+5)
}
console.log(mystery(3,4));
