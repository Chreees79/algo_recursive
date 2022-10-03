// ITERATIVE WAY --------------------------------

const computePowerIt = (n, p) => {
    var result = 1;
    for (let i = 0; i < p; i++)
      result *= n;
    return result;
  }
console.log(computePowerIt(2, 10));

// RECURSIVE WAY --------------------------------

const computePowerRec = (n, p) => {
  if (n === 0 ) return 0;
  else if (p === 0) return 1;
  else if ( Number.isInteger(n) === false ||Number.isInteger(p) === false) return 0;
  else return n * computePowerRec(n, p -1);
}
console.log(computePowerRec(2, 10));