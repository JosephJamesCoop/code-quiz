
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;
var viewHighScore = document.getElementById("viewHighScore");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var everything = document.getElementById("everything");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("startButton");
var summary = document.getElementById("summary");
var finalScore = document.getElementById("finalScore");
var initialInput = document.getElementById("initialInput");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var highScoreSection = document.getElementById("highScoreSection");
var listOfHighScores = document.getElementById("listOfHighScores");
var goBackBtn = document.getElementById("goBackBtn");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var choiceE = document.getElementById("btn4");
var answerCheck = document.getElementById("answerCheck");

 const questions = [
   {
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
   }
];

var totalTime = 151;
function newQuiz() {
   questionIndex = 0;
   totalTime = 150;
   timeLeft.textContent = totalTime;
   initialInput.textContent = "";
   startDiv.style.display = "none";
   questionDiv.style.display = "block";
   timer.style.display = "block";
   timesUp.style.display = "none";
   var startTimer = setInterval(function() {
       totalTime--;
       timeLeft.textContent = totalTime;
       if(totalTime <= 0) {
           clearInterval(startTimer);
           if (questionIndex < questions.length - 1) {
               gameOver();
           }
       }
   },1000);

   showQuiz();
};

function checkAnswer(answer) {
   var lineBreak = document.getElementById("lineBreak");
   lineBreak.style.display = "block";
   answerCheck.style.display = "block";
   if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
       correctAns++;
       answerCheck.textContent = "Correct!";
   } else {
       totalTime -= 10;
       timeLeft.textContent = totalTime;
       answerCheck.textContent = "Incorrect";
   }
   questionIndex++;
   if (questionIndex < questions.length) {
       nextQuestion();
   } else {
       gameOver();
   }
}
function nextQuestion() {
   questionTitle.textContent = questions[questionIndex].question;
   choiceA.textContent = questions[questionIndex].choices[0];
   choiceB.textContent = questions[questionIndex].choices[1];
   choiceC.textContent = questions[questionIndex].choices[2];
   choiceD.textContent = questions[questionIndex].choices[3];
   choiceE.textContent = questions[questionIndex].choices[4];
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }
function chooseE() { checkAnswer(4); }

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);
choiceE.addEventListener("click", chooseE);

function gameOver() {
   summary.style.display = "block";
   questionDiv.style.display = "none";
   startDiv.style.display = "none";
   timer.style.display = "none";
   timesUp.style.display = "block";
   finalScore.textContent = correctAns;
}

function storeHighScores(event) {
   event.preventDefault();
   if (initialInput.value === "") {
       alert("Please enter your initials!");
       return;
   } 
   startDiv.style.display = "none";
   timer.style.display = "none";
   timesUp.style.display = "none";
   summary.style.display = "none";
   highScoreSection.style.display = "block";   
   var savedHighScores = localStorage.getItem("high scores");
   var scoresArray;
   if (savedHighScores === null) {
       scoresArray = [];
   } else {
       scoresArray = JSON.parse(savedHighScores)
   }
   var userScore = {
       initials: initialInput.value,
       score: finalScore.textContent
   };
   scoresArray.push(userScore);
   var scoresArrayString = JSON.stringify(scoresArray);
   window.localStorage.setItem("high scores", scoresArrayString);

   showHighScores();
}

var i = 0;
function showHighScores() {
   startDiv.style.display = "none";
   timer.style.display = "none";
   questionDiv.style.display = "none";
   timesUp.style.display = "none";
   summary.style.display = "none";
   highScoreSection.style.display = "block";
   var savedHighScores = localStorage.getItem("high scores");
   if (savedHighScores === null) {
       return;
   }
   var storedHighScores = JSON.parse(savedHighScores);
   for (; i < storedHighScores.length; i++) {
       var eachNewHighScore = document.createElement("p");
       eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
       listOfHighScores.appendChild(eachNewHighScore);
   }
}

function showQuiz() {
   nextQuestion();
}

submitInitialBtn.addEventListener("click", function(event){ 
   storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
   showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
   startDiv.style.display = "block";
   highScoreSection.style.display = "none";
});
