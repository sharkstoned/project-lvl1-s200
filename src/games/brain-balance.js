import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { getMedian, getBalance } from '../utils';


const RULES = 'Balance given number.';


const roundGenerator = () => {
  const generateNumber = () => {
    let exp = 0;

    do {
      exp = Math.round((Math.random() * 10));
    } while (exp < 2 || exp > 4);

    return Math.round(Math.random() * (10 ** exp));
  };

  const task = generateNumber();
  const median = getMedian(task);
  const balance = getBalance(task);
  const prebalancedArray = Array(task.toString().length).fill(Math.floor(median));

  if (balance) {
    for (let i = 0; i < balance; i += 1) {
      prebalancedArray[prebalancedArray.length - 1 - i] += 1;
    }
  }

  const solution = parseInt(prebalancedArray.join(''), 10);
  return makeRoundData(task, solution.toString());
};

export default () => {
  runGame(RULES, roundGenerator);
};

