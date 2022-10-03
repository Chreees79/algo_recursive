// ITERATIVE WAY -------------------------------
const computeFactorialIt = (n) => {
  var result = 1;
  for (var i = 1; i <= n; i++)
    result = result * i;
  return result;
}
console.log(computeFactorialIt("n"));

//RECURSIVE WAY --------------------------------
const computeFactorialRec = (n) => {
  if (n === 0) return 1;
  if (n != Number) return 0;
  else return n * computeFactorialRec(n - 1);
}
console.log(computeFactorialRec(0.2));