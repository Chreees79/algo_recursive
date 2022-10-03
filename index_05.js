const PrimeNumber = (n, i = 3) => {
  if (n === 2 ) return true;
  if (n < 2 || n % 2 === 0) return false;
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return PrimeNumber(n, i + 1);
}
const findSupPrime = (n) => {
  if (PrimeNumber(n)) return n;
  else return findSupPrime(n + 1);
};
console.log(findSupPrime(7));
console.log(findSupPrime(8));
console.log(findSupPrime(44));
console.log(findSupPrime(114));