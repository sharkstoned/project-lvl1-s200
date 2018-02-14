import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength } from '../utils';


const rules = 'What number is missing in this progression?';
const minStartLength = 2;
const maxStartLength = 2;
const minStepLength = 1;
const maxStepLength = 2;

const roundGenerator = () => {
  const firstItem = generateNumberOfLength(minStartLength, maxStartLength, true);
  const step = generateNumberOfLength(minStepLength, maxStepLength, true);
  const progressionArr = [];

  for (let i = 0; i < 10; i += 1) {
    progressionArr.push(firstItem + (step * i));
  }

  const selectedIndex = Math.round(Math.random() * 10);
  const solution = progressionArr[selectedIndex];
  progressionArr[selectedIndex] = '..';

  return makeRoundData(progressionArr.join(' '), solution.toString());
};

export default () => {
  runGame(rules, roundGenerator);
};

