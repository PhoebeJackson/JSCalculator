const readline = require('readline-sync');
console.log("Welcome to my calculator!");

console.log('Please enter an operator:');
const operator = readline.prompt();
console.log('Please enter a number:');
const number1 = +readline.prompt();
console.log('Please enter another number:');
const number2 = +readline.prompt();

if (operator == "+"){
    console.log(number1 + " " + operator + " " + number2 + " is " + ( number1 + number2 ) )
} else if (operator == "*"){
    console.log(number1 + " " + operator + " " + number2 + " is " + ( number1 * number2 ) )
} else if (operator == "-"){
    console.log(number1 + " " + operator + " " + number2 + " is " + ( number1 - number2 ) )
} else if (operator == "/"){
    console.log(number1 + " " + operator + " " + number2 + " is " + ( number1 / number2 ) )
} else {
    console.log("Invalid operator")
}