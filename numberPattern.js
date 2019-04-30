function numbers(n) {
  let res = 10,
    pattern = "";
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      pattern += " " + res;
      res += 10;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
numbers(3);
