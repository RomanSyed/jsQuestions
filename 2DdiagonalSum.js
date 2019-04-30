var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var leftSum = 0,
  rightSum = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i == j) {
      leftSum = leftSum + array[i][j];
    }
  }
}
console.log("left sum  " + leftSum);
let i = 0;
let j = array.length - 1;

while (i < array.length) {
  rightSum = rightSum + array[i][j];
  i++;
  j--;
}
console.log("right sum  " + rightSum);
