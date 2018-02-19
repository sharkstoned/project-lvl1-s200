import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength, isPrime } from '../utils';


const rules = 'Is this number prime?';
const minNumLength = 1;
const maxNumLength = 3;


const roundGenerator = () => {
  let task = generateNumberOfLength(minNumLength, maxNumLength);

  if (task <= 1) {
    task += Math.random() * 10;
  }

  return makeRoundData(task.toString(), isPrime(task) ? 'yes' : 'no');
};

export default () => {
  runGame(rules, roundGenerator);
};

