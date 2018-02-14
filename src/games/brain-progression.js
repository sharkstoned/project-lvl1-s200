import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength } from '../utils';


const RULES = 'What number is missing in this progression?';
const MIN_START_LENGTH = 2;
const MAX_START_LENGTH = 2;
const MIN_STEP_LENGTH = 1;
const MAX_STEP_LENGTH = 2;

const roundGenerator = () => {
  const firstItem = generateNumberOfLength(MIN_START_LENGTH, MAX_START_LENGTH, true);
  const step = generateNumberOfLength(MIN_STEP_LENGTH, MAX_STEP_LENGTH, true);
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
  runGame(RULES, roundGenerator);
};

