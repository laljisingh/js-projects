var arr = [1, 5, 9, 3, 9, 8];
var sum = 0;

var sum = arr.reduce((a, i) {
  return a + i;
});
document.write(sum);

// while (a.length > 0) {
//   sum += a.pop();
// }
// document.write(sum);
