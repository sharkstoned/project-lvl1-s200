import { cons, car, cdr } from 'hexlet-pairs';
import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength, getGcd } from '../utils';


const rules = 'Find the greatest common divisor of given numbers.';
const minNumLength = 2;
const maxNumLength = 3;


const roundGenerator = () => {
  const generateNumber = () => generateNumberOfLength(minNumLength, maxNumLength);

  const numbers = cons(generateNumber(), generateNumber());

  const solution = getGcd(car(numbers), cdr(numbers)).toString();
  const task = `${car(numbers)} ${cdr(numbers)}`;
  return makeRoundData(task, solution);
};

export default () => {
  runGame(rules, roundGenerator);
};

