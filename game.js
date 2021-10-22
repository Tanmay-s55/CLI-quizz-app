var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log("Welcome to DoYouKnow Me Quiz!");
console.log("**********");


var user = readlineSync.question(chalk.yellow("What's your name?"));

var questions = [
{
    question: "What is my birth year?",
    answer: "2001"
},
 {
    question: "Who is my favourite supehero?",
    answer: "batman"
},
{
  question: "What is my college major?",
  answer: "computer science"
}
];


function getQuestion(question,correctAnswer) {
    var answer = readlineSync.question(question);
    if(correctAnswer.toLowerCase() === answer.toLowerCase()){
        console.log(chalk.yellow("Correct!"));
        score++;
    }
    else {
        console.log(chalk.red("Wrong!"));
    }
}

for(var i=0;i<3;i++) {
  currentQuestion = questions[i];
  getQuestion(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.blue("**********"));
console.log(chalk.yellow(user+' your score is: '+score));