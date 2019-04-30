let pattern = "";
function triangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      pattern += "  ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += "   *";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
triangle(4);
