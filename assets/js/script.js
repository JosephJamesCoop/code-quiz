//  modeule 4 lesson 3 has timer info


// module 4 lesson 4 tell you how to clikc the buttton and go to the next page.
var timerClock = document.getElementById("timer");

var currentQuestion = document.querySelector("current-question");


var quizQuestions = [{
   question: "1. var a = 11;" + 
   "b = a - 10;" +
   "console.log(b);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 3
}, {
   question: "1. var a = 11;" + 
   "a - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 1
}, {
   question: "3. var a = 11;" + 
   "a = a - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 3
}, {
   question: "4. var a = 11;" + 
   "a = c - 10;" +
   "console.log(a);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 0
}, {
   question: "5. var a = 11;" + 
   "a = c - 10;" +
   "console.log(c);" +
   "What will be logged in the console?;",
   choices: ["a;", "11;", "10;", "1;", "0;", "error or undefined;"],
   correctAnswer: 5
},{
  question: "6. var a = 11;" + 
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






var quiz = Quiz(quizQuestions);

   var clock = 50;
   var timer = setInterval(function() {
      
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
      var output = [];
      var answers;
   
      // for each question...
      for(var i=0; i<questions.length; i++){
         
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