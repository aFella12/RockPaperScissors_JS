const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const scoreDisplay = document.querySelector('.score');
const winnerDisplay = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

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

function checkWinner() {
    if(playerScore >= 5 || computerScore >= 5) {
        if(playerScore >= 5) {
            winner = 'player';
        } else {
            winner = 'computer';
        }
        rockBtn.removeEventListener('click', playRoundRock);
        paperBtn.removeEventListener('click', playRoundPaper);
        scissorsBtn.removeEventListener('click', playRoundScissors);
        console.log('removed listeners, hopefully');
        return true;
    } else {
        winner = 'none';
        return false;
    }
}

//Algorithm for determing winner was inspired by https://realpython.com/python-rock-paper-scissors/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        scoreDisplay.textContent = 'Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            scoreDisplay.textContent = 'Player Win';
        } else {
            computerScore++;
            scoreDisplay.textContent = 'Computer Won';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            scoreDisplay.textContent = 'Player Won';
        } else {
            computerScore++;
            scoreDisplay.textContent = 'Computer Won';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            scoreDisplay.textContent = 'Player Won';
        } else {
            computerScore++
            scoreDisplay.textContent = 'Computer Won';
        }
    }
    checkWinner();
    winnerDisplay.textContent = winner;
    return true;
}

function playRoundRock() {
    playRound('rock', computerPlay())
}

function playRoundPaper() {
    playRound('paper', computerPlay())
}

function playRoundScissors() {
    playRound('scissors', computerPlay())
}

function game() {
    rockBtn.addEventListener('click', playRoundRock);
    paperBtn.addEventListener('click', playRoundPaper);
    scissorsBtn.addEventListener('click', playRoundScissors);
    return true;
}

game();