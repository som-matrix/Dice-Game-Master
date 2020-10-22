'use strict';
let scores;
let roundScore;
let activePlayer;
let dice;
let gamePlaying;

// lets give zero score to every container
 init();
// It is the time to add EventListners
//Roll Button

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. we provided a random number using math function to generate numbers from 1-6.
        dice = Math.floor(Math.random()*6)+1;
        //2. Display the result
       document.querySelector('.dice').style.display = 'block';
       document.querySelector('.dice').src = 'dice-'+ dice + '.png';
 
        //3. Update the DOM model.
        if(dice!==1){
          roundScore += dice;
          document.querySelector("#current-"+activePlayer).textContent = roundScore;
       }
       else{
          //Next Player Turn
          nextPlayer();
       }
    }  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlaying){
     scores[activePlayer] += roundScore;
     document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
 
     if(scores[activePlayer]>=50){
         document.querySelector('#name-'+activePlayer).textContent = 'Winner!';  
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         document.getElementById('current-'+activePlayer).textContent = '0';
         gamePlaying = false;
       }
     else{
         nextPlayer();
      }
   }
   
});

// Adding another EventListner for New-Game
document.querySelector('.btn-new').addEventListener('click', init);
function nextPlayer(){
    activePlayer ===0 ? activePlayer=1 :activePlayer=0;
    roundScore =0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');    
    document.querySelector('.player-1-panel').classList.toggle('active');   
    document.querySelector('.dice').style.dispaly = 'none';     
}

function init(){
   scores =[0,0];
   roundScore = 0;
   activePlayer = 0;
   dice;
   gamePlaying = true;

   
   document.getElementById('name-0').textContent = 'Player 1';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('current-0').textContent ='0';
   document.getElementById('name-1').textContent = 'Player 2';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-1').textContent ='0';

   document.getElementById('score-0').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
}


