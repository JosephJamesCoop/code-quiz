//  modeule 4 lesson 3 has timer info


// module 4 lesson 4 tell you how to clikc the buttton and go to the next page.
var timerClock = document.getElementById('timer');
var questions = document.querySelector(".questions");


function displayMessage() {
   var clock = 50;
   var msgInterval = setInterval(function() {
     if (clock >= 0) {      
       timerClock.textContent = clock;
         clock--;


// var qOne = function(){

//     var a = 11;
//    b = a - 10;

//    console.log(b)

//    What will be logged in the console?
//    li & button = 11
//    li & button = 10
//     li & button = 1 
//    li & button = 0
//    li & button = error or undefined

// }


// var qTwo = function(){

//     var a = 11;
//    a - 10;

//    console.log(a)

//    What will be logged in the console?
//    li & button = a
//    li & button = 11 // answer
//    li & button = 10
//     li & button = 1 
//    li & button = 0
//    li & button = error or undefined

// }

// var qThree = function(){

//     var a = 11;
//    a = a - 10;

//    console.log(a)

//    What will be logged in the console?
//    li & button = 11 
//    li & button = 10
//     li & button = 1 // answer
//    li & button = 0
//    li & button = error or undefined

// }

// var qFour = function(){

//     var a = 11;
//    a = c - 10;

//    console.log(a)

//    What will be logged in the console?
//    li & button = 11 // answer
//    li & button = 10
//    li & button = 1 
//    li & button = 0 
//    li & button = error or undefined

// }

// var qFive = function(){

//     var a = 11;
//    a = c - 10;

//    console.log(c)

//    What will be logged in the console?
//    li & button = 11 // answer
//    li & button = 10
//     li & button = 1 
//    li & button = 0
//    li & button = error or undefined

// }

// var qSix= function(){

//     var a = 11;
//    10 = a -=14 a;

//    console.log(a)

//    What will be logged in the console?
//    li & button = 11 // answer
//    li & button = 10
//    li & button = 1 
//    li & button = 0
//    li & button = error or undefined

// }

     }
 else {

   clearInterval(msgInterval);
   console.log('yes2"')
 }
}, 1000);
};


displayMessage();