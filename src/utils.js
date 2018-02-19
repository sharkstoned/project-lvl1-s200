// Generates random number of specified length
const generateNumberOfLength = (min, max, allowNegative = false) => {
  let exp = 0;
  let negativeCoef = 1;

  do {
    exp = Math.round((Math.random() * 10));
  } while (exp < min || exp > max);

  if (allowNegative) {
    negativeCoef = Math.round(Math.random() * 10) % 2 ? 1 : -1;
  }

  return Math.round(Math.random() * (10 ** exp)) * negativeCoef;
};

// Finds the greatest commin divisor
const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }

  return (a > b) ? getGcd(a % b, b) : getGcd(a, b % a);
};

// Finds sum of digits in the given number
const getSumOfDigits = (number) => {
  const iter = (acc, arr) => {
    if (arr.length === 0) {
      return acc;
    }

    const [, ...rest] = arr;
    return iter(acc + parseInt(arr[0], 10), rest);
  };

  return iter(0, number.toString().split(''));
};

// Finds median of all digits in the number
const getMedian = number => getSumOfDigits(number) / number.toString().length;

// Finds "unspent balance" with which digits should be increased
const getBalance = number => getSumOfDigits(number) % number.toString().length;

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};

export { getSumOfDigits, getMedian, getBalance, generateNumberOfLength, getGcd, isPrime };
