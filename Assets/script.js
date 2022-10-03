// DEPENDENCIES (DOM ELEMENTS)
// Button to start the game/new game
// container that displays the unfinished word/unguessed word
    // each character not filled in will be an underscore
// Need another container that will hold the time, scorecard and reset button
    // The timer should display the number(seconds) and the words seconds remaining    
    // the scorecard should display headers wins and losses with the numbers underneath
    // reset button is a button saying "reset word to play another round" that will reset the game without resetting the scorecard

var newGameBtn = document.getElementById("new-game");
var wordDisplay = document.getElementById("word-display");
var timeCountdown = document.getElementById("time-countdown");
var scoreWins = document.getElementById("score-wins");
var scoreLosses = document.getElementById("score-losses");
var gameResetBtn = document.getElementById("game-reset");
    
var newGameBtnCallback = function (){
     return;
}
var gameResetBtnCallback = function (){
     return;
}
var keypressCallback = function (){
     return;
}
    
document.addEventListener("click", newGameBtnCallback);
document.addEventListener("click", gameResetBtnCallback);
document.addEventListener("keypress", keypressCallback);
    

// DATA / STATE
// array of words from which we will choose one randomly
// need a variable to hold our chosen random word
// variable to hold the character the user typed
// variable to hold the actual timer
// variable to hold the countdown of remaining seconds
// variable to hold wins 
// variable to hold losses
// Variable of number of games played
// Variable to save score in local storage
    
var wordBank = ["rabbit", "cat", "fish"];
var chosenRandomWord = "";
var characterTyped = "";
var timer = {}; //going to hold the timer passed from the setInterval
var countdownRemaining = 30;
var totalWins = 0;
var totalLosses = 0;
var totalGamesPlayed = 0;
var scoreSaved = {
     wins: 0,
     losses: 0,
     totalGames: 0
};
    
// FUNCTIONS

function generateRandomWord (){
     var n = Math.floor(Math.random()*wordBank.length);
     chosenRandomWord = wordBank[n];
}

function populateWordDisplay (){
     for(var i=0; i<chosenRandomWord.length; i++){
          var element = document.createElement("span");
          element.textContent = "_";
          element.setAttribute("id", "W-"+i);
          wordDisplay.appendChild(element);
          console.log(element);
     }

}
generateRandomWord();
populateWordDisplay();


// USER INTERACTIONS
// A user can click...
// The user will be able to click on the start button
     // once this happens the timer starts 
     // An unguessed word appears
     // and the score will display 0, 0/reset to 0
// User can type keys to guess missing letters 
     // with each key stroke check to see if he guessed a correct letter and if yes display correct letter
// The user can click on the reset button
     // starts another round of the game by displaying a new unguessed word
     // The time starts over 
// User can close browser
     // if they do the the score is remembered
// When user opens browser/navigate to URL then score is reset      


// INITIALIZATION