import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { getMedian, getBalance, generateNumberOfLength } from '../utils';


const RULES = 'Balance given number.';
const MIN_NUM_LENGTH = 2;
const MAX_NUM_LENGTH = 4;


const roundGenerator = () => {
  const task = generateNumberOfLength(MIN_NUM_LENGTH, MAX_NUM_LENGTH);
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

