//ITERATIVE WAY ----------------------------------------------------------------
const computeSquareRoot = (n,p) => {
  for(p = 1; p < n; p++) {
  if ( p * p === n) return p;
  }
};
console.log(computeSquareRoot(81, 2));

//RECURSIVE WAY ----------------------------------------------------
const SquareRoot = (n,p) => {
if (Number.isInteger(n) == false || Number.isInteger(p) == false) return 0;
else if (n  * n === p) return n;
else return SquareRoot(n - 1, p);
};
console.log(SquareRoot(81, 81));
