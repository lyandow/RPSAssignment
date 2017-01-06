
// -----------------------------------------
// RPS Variables
// -----------------------------------------

const choiceInput = document.getElementById("choiceInput");
const spanPChoice = document.getElementById("playerChoice");
const spanCChoice = document.getElementById("computerChoice");
const winnerP = document.getElementById("winner");
var compChoice;

// -----------------------------------------
// Dice Game Variables
// -----------------------------------------

const gameButton = document.getElementById("gameButton");
const playerRoll = document.getElementById("playerRoll");
const result = document.getElementById("result");


// -----------------------------------------
// RPS Game Code
// -----------------------------------------
function compOutput () {
    var rand = Math.floor(Math.random() * 3) + 1;
    spanPChoice.innerHTML = choiceInput.value;
    if (rand == 1) 
    {
        compChoice = 'ROCK';
    }
    else if (rand == 2) 
    {
        compChoice = 'PAPER';   
    }
    else 
    {
        compChoice = 'SCISSORS';   
    }
    spanCChoice.innerHTML = compChoice.toLowerCase();
}

function decision (userMove, computerMove) {
     if ((userMove == computerMove) || ((userMove == 'SCISSOR' || userMove == 'SCISSORS') && computerMove == 'SCISSORS'))
    {
        winnerP.innerHTML = "Tie!";   
    }
    else if (userMove == 'ROCK' && computerMove == 'PAPER')
    {
        winnerP.innerHTML = "Computer wins!";
    }
    else if (userMove == 'ROCK' && computerMove == 'SCISSORS')
    {
        winnerP.innerHTML = "You win!";
    }
    else if (userMove == 'PAPER' && computerMove == 'SCISSORS')
    {
        winnerP.innerHTML = "Computer wins!";
    }    
    else if (userMove == 'PAPER' && computerMove == 'ROCK')
    {
        winnerP.innerHTML = "You win!";
    }
    else if ((userMove == 'SCISSORS' || userMove == 'SCISSOR') && computerMove == 'PAPER')
    {
        winnerP.innerHTML = "You win!";
    }
    else if ((userMove == 'SCISSORS' || userMove == 'SCISSOR') && computerMove == 'ROCK')
    {
        winnerP.innerHTML = "Computer wins!";
    }
    else 
    {
        spanPChoice.innerHTML = "Please enter either rock, paper, or scissors!";
        winnerP.innerHTML = "";
    }   
}

choiceInput.addEventListener("change", function (){
    var userChoice = choiceInput.value.toUpperCase();
    compOutput();
    decision(userChoice, compChoice);
});


// -----------------------------------------
// Dice Game Code
// -----------------------------------------


gameButton.addEventListener('click', function (){
    var roll = Math.floor(Math.random() * 12) + 1;
    playerRoll.innerHTML = roll;
    
    if (roll == 2 || roll == 3 || roll == 12)
    {
       result.innerHTML = "You lose!";
    }
    else if (roll == 7 || roll == 11)
    {
        result.innerHTML = "You won!";
    }
    else 
    {
        result.innerHTML = "Roll again!";
    }
});






















