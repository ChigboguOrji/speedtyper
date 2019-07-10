'use strict';
window.onload = init;

function init() {

   let timerBox,
      scoreBox,
      letterBox,
      levelBox,
      input,
      start,
      reset;

   timerBox = document.getElementById('timer-box');
   scoreBox = document.getElementById('score-box');
   letterBox = document.getElementById('letter-box');
   levelBox = document.getElementById('level-box');
   input = document.getElementById('input');

   start = document.getElementById('start');
   reset = document.getElementById('reset');

   start.addEventListener('click', startGame);
   reset.addEventListener('click', initialize);
   input.addEventListener('input', wordMatched);

   let
      score,
      level,
      time,
      speed,
      wordList,
      word,
      countDownTimer;


   wordList = [
      'Michael', 'Petersoft', 'Ebuka', 'Paul', 'michael', 'aggregate', 'dividend', 'biometric',
      'individual', 'brightside', 'technologies', 'technology', 'apology', 'apocalypse', 'hello world',
      'hindu', 'Hinduism', 'Nigeria', 'easter region', 'Agriculture', 'agro-culture', 'agro-chemical', 'indigene',
      'separate', 'confuscate', 'infiltrate', 'adulterated', 'Adultrate', 'in-humane', 'socrates', 'Einstein',
      'idiomatic', 'node.js', 'express.js', 'handlebars template', 'jade template', 'ejs template', 'temple run',
      'brain boss', 'speed typing', 'obeyance', 'obedience', 'professionalism', 'ideologies'
   ];


   function startGame() {
      initialize();
      addWord();
      updateLevel();
   }


   function initialize() {
      clearInterval(countDownTimer);
      input.focus();
      score = 0;
      level = 0;
      time = 15;
      speed = 1000;
      timerBox.innerHTML = time;
      letterBox.innerHTML = 'fingers ready?';
      updateScore();

   }


   function addWord() {
      word = wordList[Math.floor(Math.random() * wordList.length)];
      letterBox.innerHTML = word;
      updateScore();
      countDown();

   }


   function wordMatched() {
      let value = input.value;

      if (value == word) {
         score++;
         updateScore();
         input.value = '';
         addWord();
         time = 0;
         countDown();
         input.focus();
      }

   }


   function countDown() {
      time = 15;
      let secTimer = document.getElementById('secTimer');

      function timeTick() {
         time--;
         timerBox.innerHTML = time;
         secTimer.innerHTML = `sec${time > 0 ? 's' : ''}`;
         time == 0 ? gameEnd : start.hidden = 1; // hide start button on game start
      }

      timeTick();
      countDownTimer = setInterval(timeTick, speed);

   }


   function gameEnd() {
      clearInterval(countDownTimer);
      letterBox.innerHTML = 'GAME OVER';
      start.hidden = !1; // show start button on game over

   }


   function updateScore() {
      scoreBox.innerHTML = score;
      updateLevel();

   }


   function updateLevel() {
      level = (score <= 10) ?
         1 : (score > 10 <= 20) ?
         2 : (score > 20 <= 30) ?
         3 : (score > 30 <= 50) ?
         4 : '5';

      levelBox.innerHTML = level;
      return level;
   }

}