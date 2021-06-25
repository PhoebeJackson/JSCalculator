const readline = require('readline-sync');
console.log("Welcome to my calculator!");

console.log('Please enter an operator:');
const operator = readline.prompt();
console.log('How many numbers would you like to ' + operator + ':');
const quantity = +readline.prompt();

let numbers = [];
for (let i = 0; i < quantity; i++) {
    console.log('Please enter another number:');
    numbers.push(+readline.prompt());
}
let answer
let string = ""
switch (operator){
    case "+":
        answer = 0;
        numbers.forEach(function(element, index) {if (index == 0){string += element;} else {string += " + " + element}; answer+=element;})
        break;
    case "*":
        answer = 1;
        numbers.forEach(function(element, index) {if (index == 0){string += element;} else {string += " * " + element}; answer*=element;})
        break;
    case "-":
        numbers.forEach(function(element, index) {if (index == 0){string += element; answer = element;} else {string += " - " + element; answer-=element;}})
        break;
    case "/":
        numbers.forEach(function(element, index) {if (index == 0){string += element; answer = element} else {string += " / " + element; answer/=element;}})
        break;
    default:
        console.log("Invalid operator");
}
console.log(string + " is " + answer );