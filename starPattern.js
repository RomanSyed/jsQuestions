function stars(number) {
  let pattern = "";
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
stars(6);
