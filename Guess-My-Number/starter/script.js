'use strict';
let sceret_Number=Math.trunc(Math.random()*20)+1;
let score=20;
let high_score=0;
const displayMessage=function(message){
   document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
   const response=Number(document.querySelector('.guess').value);
   console.log(response,typeof response);
//    when there is no input
   if(!response){
       displayMessage("No Number!");
   }
//    when the player wins
   else if(response ===sceret_Number)
   {
      displayMessage("Hurray its correct guess !");
       document.querySelector('body').style.backgroundColor=' #60b347';
       document.querySelector('.number').style.width='30rem';

       document.querySelector('.number').textContent=sceret_Number;
       if(score>high_score){
          high_score=score;
          document.querySelector('.highscore').textContent=high_score;
       }
   }
   // when the guess is not equal
   else if(response !=sceret_Number)
   {
      if(score >1)
      {
         displayMessage(response>sceret_Number ?' your guess is too high':' Your guess is too low');
         score=score-1;
       document.querySelector('.score').textContent=score;
      }
       
    //    when the score is zero
       else
       {
          displayMessage("Sorry you lost the game");
           document.querySelector('.score').textContent=0;
       }
   }
   else if(response >20){
      displayMessage("please enter a number in the range 0-20");
   }
   
   document.querySelector('.again').addEventListener('click',
   function(){
      score=20;
      sceret_Number=Math.trunc(Math.random()*20)+1; 
      displayMessage("Start Guessing");
      document.querySelector('.score').textContent=score;
      document.querySelector('.number').textContent="?";
      document.querySelector('.guess').value='';
      document.querySelector('body').style.backgroundColor='#222';
         document.querySelector('.number').style.width='15rem';
   });
   
   
});
