import { cons, car, cdr } from 'hexlet-pairs';
import { runGame } from '..';
import { makeRoundData } from '../roundData';
import { generateNumberOfLength } from '../utils';


const rules = 'What is the result of the expression?';
const minNumLength = 1;
const maxNumLength = 3;


const roundGenerator = () => {
  const generateNumber = () => generateNumberOfLength(minNumLength, maxNumLength, true);
  let operator = '';
  let solution = 0;

  switch (Math.round((Math.random() * 10) / 5)) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
    default: break;
  }

  const operands = cons(generateNumber(), generateNumber());

  switch (operator) {
    case '+':
      solution = car(operands) + cdr(operands);
      break;
    case '-':
      solution = car(operands) - cdr(operands);
      break;
    case '*':
      solution = car(operands) * cdr(operands);
      break;
    default: break;
  }

  const task = `${car(operands)} ${operator} ${cdr(operands)}`;
  return makeRoundData(task, solution.toString());
};

export default () => {
  runGame(rules, roundGenerator);
};

