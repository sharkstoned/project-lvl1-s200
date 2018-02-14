import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength } from '../utils';


const rules = 'Answer "yes" if number is even, otherwise answer "no".';
const minNumLength = 1;
const maxNumLength = 3;


const roundGenerator = () => {
  const task = generateNumberOfLength(minNumLength, maxNumLength);
  const solution = !(task % 2) ? 'yes' : 'no';
  return makeRoundData(task, solution);
};

export default () => {
  runGame(rules, roundGenerator);
};

