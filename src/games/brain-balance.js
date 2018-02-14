import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { getMedian, getBalance, generateNumberOfLength } from '../utils';


const rules = 'Balance given number.';
const minNumLength = 2;
const maxNumLength = 4;


const roundGenerator = () => {
  const task = generateNumberOfLength(minNumLength, maxNumLength);
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
  runGame(rules, roundGenerator);
};

