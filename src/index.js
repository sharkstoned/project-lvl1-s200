import readlineSync from 'readline-sync';
import { getTask, getSolution } from './roundData';


const NUMBER_OF_ROUNDS = 3;


// Greets user and gets their name
const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');

  if (rules) {
    console.log(rules);
  }

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

// Represents one round of the game
const round = (task) => {
  console.log(`\nQuestion: ${task}`);
  return readlineSync.question('Your answer: ');
};

// Shows message for wrong answer
const wrongAnswer = (correct, wrong, name) => {
  console.log(`\n"${wrong}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${name}!`);
};

// Shows message for right answer
const rightAnswer = () => {
  console.log('\nCorrect!');
};

// Shows congratulations message
const congratulate = (name) => {
  console.log(`\nCongratulations, ${name}!`);
};

// Represents whole game process with no number of rounds predefined
const runGameUnsetIterations = (numberOfRounds, rules, generator) => {
  const userName = greeting(rules);

  const iter = (counter) => {
    if (counter === 0) {
      congratulate(userName);
      return;
    }

    const roundData = generator();
    const userInput = round(getTask(roundData));

    if (userInput === getSolution(roundData)) {
      rightAnswer();
      iter(counter - 1);
    } else {
      wrongAnswer(getSolution(roundData), userInput, userName);
    }
  };

  iter(numberOfRounds);
};

// Reprsents game process with predefined number of rounds
const runGame = (rules, generator) => runGameUnsetIterations(NUMBER_OF_ROUNDS, rules, generator);

export { runGame, greeting };
