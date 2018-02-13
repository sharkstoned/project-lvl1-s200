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

const getMedian = number => getSumOfDigits(number) / number.toString().length;

const getBalance = number => getSumOfDigits(number) % number.toString().length;

export { getSumOfDigits, getMedian, getBalance };
