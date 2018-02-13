import { cons, car, cdr } from 'hexlet-pairs';
import { runGame } from '..';
import { makeRoundData } from '../roundData';


const RULES = 'What is the result of the expression?';


const roundGenerator = () => {
  const generateNumber = () => Math.round(Math.random() *
           (10 ** Math.round((Math.random() * 10) / 3)));

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
  runGame(RULES, roundGenerator);
};

