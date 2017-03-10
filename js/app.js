
// -----------------------------------------
// RPS Variables
// -----------------------------------------

const choiceInput = document.getElementById("choiceInput");
const spanPChoice = document.getElementById("playerChoice");
const spanCChoice = document.getElementById("computerChoice");
const winnerP = document.getElementById("winner");
const playButton = document.getElementById('basic-radio-button');
var radioButtons = document.querySelectorAll('input[name="basic-radio"]');
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
    spanPChoice.innerHTML = playButton.value;
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
     if ((userMove == computerMove) || (userMove == 'SCISSORS' && computerMove == 'SCISSORS'))
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
}

playButton.addEventListener("click", function (){
    var selectedRadio;
    for (var i = 0; i < radioButtons.length; i++)   {
      if (radioButtons[i].checked) {
        selectedRadio = radioButtons[i];
        break;
      }
    }
    compOutput();
    decision(selectedRadio.value, compChoice);
    spanPChoice.innerHTML = selectedRadio.value.toLowerCase();
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
