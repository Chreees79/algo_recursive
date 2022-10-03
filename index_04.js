// ITERATIVE WAY --------------------------------
const isPrimeNumber = (n) => {
  if (n < 2) return false;
  for(let i = 2; i < n; i++)
    if(n%i === 0) return false;
    else return true;
}
console.log(isPrimeNumber(1));

// RECURSIVE WAY ---------------------------------

const PrimeNumber = (n, i = 3) => {
  if (n === 2 ) return true;
  if (n < 2 || n % 2 === 0) return false;
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return PrimeNumber(n, i + 1);
}
console.log(PrimeNumber(5));

