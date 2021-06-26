const readline = require('readline-sync');

function printWelcomeMessage(){
    console.log("Welcome to my calculator!");
}

function goAgain(){
    console.log('Another Calculation? (yes)');
    return readline.prompt() == 'yes';
}

function performOneCalculation(){
    console.log('Please enter an operator:');
    const operator = readline.prompt();
    console.log('How many numbers would you like to ' + operator + ':');
    const quantity = +readline.prompt();
    
    function newNumber(i){
        if (i==0){
            console.log('Please enter a number:');
        } else {
        console.log('Please enter another number:');
        }
        let number = +readline.prompt();
        while (isNaN(number)){
            console.log('Not a number, please enter a number:');
            number = +readline.prompt();
        }
        numbers.push(number);
    }

    let numbers = [];
    for (let i = 0; i < quantity; i++) {
        newNumber(i)
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
}

printWelcomeMessage()
performOneCalculation()
while (goAgain()){
    performOneCalculation()
}
