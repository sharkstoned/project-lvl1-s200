#!/usr/bin/env nodejs
import { cons, car, cdr } from 'hexlet-pairs';
import { runGame } from '..';
import { makeRoundData } from '../roundData';

const RULES = 'Find the greatest common divisor of given numbers.';
const NUMBER_OF_ROUNDS = 3;


const roundGenerator = () => {
  const basicDivisor = Math.round(Math.random() * (10 ** Math.ceil((Math.random() * 10) / 5)));
  const multipliers = cons(Math.round(Math.random() * 10), Math.round(Math.random() * 10));

  const getGcd = (a, b) => {
    if (a === 0 || b === 0) {
      return a + b;
    }

    return (a > b) ? getGcd(a % b, b) : getGcd(a, b % a);
  };

  const task = `${basicDivisor * car(multipliers)} ${basicDivisor * cdr(multipliers)}`;
  const solution = (basicDivisor * getGcd(car(multipliers), cdr(multipliers))).toString();
  return makeRoundData(task, solution);
};

export default () => {
  runGame(NUMBER_OF_ROUNDS, RULES, roundGenerator);
};

