
var timerClock = document.getElementById('timer');

function displayMessage() {
   var clock = 60;
   var msgInterval = setInterval(function() {
     if (clock >= 0) {
       
       timerClock.textContent = clock;
         clock--;


      // questions will cycle through here


     }
 else {

   clearInterval(msgInterval);
   console.log('yes2"')

   // will need to take you to next page with high score sheet and let them know they did not finish.
 }
}, 1000);
};


displayMessage();