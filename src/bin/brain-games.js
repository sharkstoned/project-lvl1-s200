#!/usr/bin/env nodejs
import { getUserName } from '..';

console.log('Welcome to the Brain Games!');

const name = getUserName('May I have your name? ');
console.log(`Hello, ${name}!`);

