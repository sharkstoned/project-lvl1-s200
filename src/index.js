import readlineSync from 'readline-sync';

export const getUserName = question => readlineSync.question(question);
