import { runGame } from '..';
import { makeRoundData } from '../roundData';


const RULES = 'Answer "yes" if number is even, otherwise answer "no".';


const roundGenerator = () => {
  const task = Math.trunc(Math.random() * (10 ** Math.trunc((Math.random() * 10) / 3)));
  const solution = !(task % 2) ? 'yes' : 'no';
  return makeRoundData(task, solution);
};

export default () => {
  runGame(RULES, roundGenerator);
};
