const viewHighScore = document.getElementById("viewHighScore");
const timer = document.getElementById("timer");
const timeLeft = document.getElementById("timeLeft");
const timesUp = document.getElementById("timesUp");
const everything = document.getElementById("everything");
const startDiv = document.getElementById("start");
const startQuizBtn = document.getElementById("startQuizBtn");
const currentQuestion = document.getElementById("currentQuestion");
const choiceA = document.getElementById("btn0");
const choiceB = document.getElementById("btn1");
const choiceC = document.getElementById("btn2");
const choiceD = document.getElementById("btn3");
const choiceE = document.getElementById("btn4");
const summary = document.getElementById("summary");
const finalScore = document.getElementById("finalScore");
const initialInput = document.getElementById("initialInput");
const submitBtn = document.getElementById("submitBtn");
const highScoreSection = document.getElementById("highScoreSection");
const listOfHighScores = document.getElementById("listOfHighScores");
const questionDiv = document.getElementById("questionDiv");
const questionTitle = document.getElementById("questionTitle");
const answerCheck = document.getElementById("answerCheck");
const goBackBtn = document.getElementById("goBackBtn");
const clearHighScoreBtn = document.getElementById("clearHighScoreBtn");


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



const totalTime = 160;

const newQuiz = () => {
    questionIndex = 0;
    totalTime = 160;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    const startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                endGame();
            }
        }
    },1000);
};
startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);
choiceE.addEventListener("click", chooseE);

const endGame = () => {


   finalScore.textContent = correctAns;
}


const totalTime = 151;
const newQuiz = () => {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    const startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                endGame();
            }
        }
    },1000);

    showQuiz();
};

const checkAnswer = (answer) => {

    const lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
     
        correctAns++;
  
        answerCheck.textContent = "Correct!";
    } else {

        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {

        endGame();
    }
}

const chooseA = () => { checkAnswer(0); };
const chooseB = () => { checkAnswer(1); };
const chooseC = () => { checkAnswer(2); };
const chooseD = () => { checkAnswer(3); };

const endGame = () => {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctAns;
}

const storeHighScores = (event) => {
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

    const savedHighScores = localStorage.getItem("high scores");
    const scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    const userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };
    scoresArray.push(userScore);

    const scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
   
}
