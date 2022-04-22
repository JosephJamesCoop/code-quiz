const viewHighScore = document.getElementById("viewHighScore");
const timer = document.getElementById("timer");
const timeLeft = document.getElementById("timeLeft");
const timesUp = document.getElementById("timesUp");
const everything = document.getElementById("everything");
const startDiv = document.getElementById("start");
const startQuizButton = document.getElementById("startQuizButton");
const currentQuestion = document.getElementById("currentQuestion");
const choiceA = document.getElementById("btn0");
const choiceB = document.getElementById("btn1");
const choiceC = document.getElementById("btn2");
const choiceD = document.getElementById("btn3");
const choiceF = document.getElementById("btn4");
const choiceG = document.getElementById("btn5");
const summary = document.getElementById("summary");
const finalScore = document.getElementById("finalScore");
const initialInput = document.getElementById("initialInput");
const submitBtn = document.getElementById("submitBtn");
const highScoreSection = document.getElementById("highScoreSection");
const listOfHighScores = document.getElementById("listOfHighScores");



const quizQuestions = [{
   question: "1. const a = 11;" + 
   "b = a - 10;" +
   "console.log(b);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 3
}, {
   question: "1. const a = 11;" + 
   "a - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 1
}, {
   question: "3. const a = 11;" + 
   "a = a - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 3
}, {
   question: "4. const a = 11;" + 
   "a = c - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 0
}, {
   question: "5. const a = 11;" + 
   "a = c - 10;" +
   "console.log(c);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 5
},{
  question: "6. const a = 11;" + 
  "10 = a - a;" +
  "console.log(a);" +
  "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 5
}];

function quiz(quizQuestions) {
   this.score = 0;
   this.quesstions = questions;
   this.questionIndex = 0;
}






const quiz = Quiz(quizQuestions);

   const clock = 50;
   const timer = setInterval(function() {
      
     if (clock >= 0) {      
       timerClock.textContent = clock;
         clock--;
      }
      else {
     
        clearInterval(timer);
        console.log('yes2"')
      }
     }, 1000);

     function showQuestions(questions, currentQuestion){
      // we'll need a place to store the output and the answer choices
      const output = [];
      const answers;
   
      // for each question...
      for(const i=0; i<questions.length; i++){
         
         // first reset the list of answers
         answers = [];
   
         // for each available answer to this question...
         for(number in questions[i].answers){
console.log(questions.length)
answers.push(
   '<label>'
      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
      + letter + ': '
      + questions[i].answers[letter]
   + '</label>'
);
}

// add this question and its answers to the output
output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
);
}

// finally combine our output list into one string of html and put it on the page
currentQuestion.innerHTML = output.join('');
}



   




         showQuestions(questions, currentQuestion);