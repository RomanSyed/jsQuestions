var count = 2;
var a = 0,
  b = 1,
  i = 0;
var array = [];
array[i] = a;
array[i + 1] = b;
function fib(n) {
  if (n == 0) {
    return;
  }
  if (n == 1) {
    console.log("0");
  } else {
    console.log(a);
    console.log(b);
    while (count <= n) {
      c = a + b;
      array[i + 2] = c;
      console.log(c);
      a = b;
      b = c;
      count++;
      i++;
    }
  }
}
function nthdig(n) {
  console.log(n + "th digit is " + array[n - 1]);
}
fib(9);
nthdig(6);
