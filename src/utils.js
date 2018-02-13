// Generates random number of specified length
const generateNumberOfLength = (min, max) => {
  let exp = 0;

  do {
    exp = Math.round((Math.random() * 10));
  } while (exp < min || exp > max);

  return Math.round(Math.random() * (10 ** exp));
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


export { getSumOfDigits, getMedian, getBalance, generateNumberOfLength };
