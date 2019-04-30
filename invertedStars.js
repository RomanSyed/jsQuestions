function stars(number) {
  let pattern = "";
  for (let i = number; i > 0; i--) {
    for (let j = i; j <= i && j > 0; j--) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
stars(16);
