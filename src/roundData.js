import { cons, car, cdr } from 'hexlet-pairs';


const makeRoundData = (task, solution) => cons(task, solution);
const getTask = data => car(data);
const getSolution = data => cdr(data);

export { makeRoundData, getTask, getSolution };
