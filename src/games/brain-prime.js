import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength } from '../utils';


const rules = 'Is this number prime?';
const minNumLength = 1;
const maxNumLength = 3;


const roundGenerator = () => {
// todo: validate 0 and 1
  const task = generateNumberOfLength(minNumLength, maxNumLength);
  let solution = 'yes';

  for (let i = 2; i <= Math.sqrt(task); i += 1) {
    if (!(task % i)) {
      solution = 'no';
    }
  }

  return makeRoundData(task.toString(), solution);
};

export default () => {
  runGame(rules, roundGenerator);
};

