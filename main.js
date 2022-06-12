const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const scoreDisplay = document.querySelector('.score');

//the function getRandomIntInclusive was taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function computerPlay() {
    computerMoveInt = getRandomIntInclusive(1, 3);
    switch(computerMoveInt) {
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        case 3:
            computerSelection = 'scissors';
            break;
        default:
            break;
    }
    return computerSelection;
}

//Algorithm for determing winner was inspired by https://realpython.com/python-rock-paper-scissors/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = 'Tie';
        scoreDisplay.textContent = result;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            result = 'Player Win';
            scoreDisplay.textContent = result;
        } else {
            result = 'Computer Win';
            scoreDisplay.textContent = result;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Player Win';
            scoreDisplay.textContent = result;
        } else {
            result = 'Computer Win';
            scoreDisplay.textContent = result;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            result = 'Player Win';
            scoreDisplay.textContent = result;
        } else {
            result = 'Computer Win';
            scoreDisplay.textContent = result;
        }
    }
    return result;
}

function game() {
    computerMove = computerPlay();
    rockBtn.addEventListener('click', function() {playRound('rock', computerMove)});
    paperBtn.addEventListener('click', function() {playRound('paper', computerMove)});
    scissorsBtn.addEventListener('click', function() {playRound('scissors', computerMove)});
}

game();