const readline = require('readline-sync');
console.log("Welcome to my calculator!");

console.log('Please enter a number:');
const number1 = readline.prompt();
console.log('Please enter another number:');
const number2 = readline.prompt();
console.log(number1 + " multiplied by " + number2 + " is " + number1*number2)