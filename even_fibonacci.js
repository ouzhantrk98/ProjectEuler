//The question is to find the sum of all even fibonacci numbers below 4 million.

//We are adding all even fibonacci numbers below 4 million.
function evenFibonacci(max) {
  var a = 1;
  var b = 2;
  var sum = 2;
  while (b < max) {
    b = a + b;
    a = b - a;
    if (b % 2 === 0) {
      sum += b;
    }
  }
  return sum;
}

console.log(evenFibonacci(4000000));