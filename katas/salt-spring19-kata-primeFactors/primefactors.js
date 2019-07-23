function primeFactors(num) {
  const parseNumber = parseInt(num);
  if (Number.isNaN(parseNumber)){
    throw new Error('Illegal character. Input must be a number.');
  }
  if (num < 1) {
    throw new Error('Git gud at math.');
  }
  if (isPrime(num)) {
    return [num];
  }

  let primeNumber = [];
  const sqrtNum = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= sqrtNum; i++) {
    if (isPrime(i)) {
      primeNumber.push(i);
    }
  }

  let primeFactors = [];

  for (let i = 0; i < primeNumber.length; i++) {
    while (num % primeNumber[i] === 0) {
      primeFactors.push(primeNumber[i]);
      num /= primeNumber[i];
    }
  }

  if (isPrime(num)) {
    primeFactors.push(num);
  }

  return primeFactors;
}


function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let modulusIsZero = false;
  let numArray = [];
  const sqrtNum = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= sqrtNum; i++) {
    numArray.push(i);
  }
  for (value of numArray) {
    num % value === 0 ? 
    modulusIsZero = true:
    modulusIsZero = false;
    if (modulusIsZero) {
      return false;
    }
  }
  return true;
}

let num = process.argv[2];
console.time();
console.log(primeFactors(num));
console.timeEnd();

//module.exports.primeFactors = primeFactors;
