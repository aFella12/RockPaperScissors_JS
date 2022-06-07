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
            console.log('Somehow this code broke, idk man');
            break;
    }
    return computerSelection;
}

//Algorithm for determing winner was inspired by https://realpython.com/python-rock-paper-scissors/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        result = `Tie, both players chose ${playerSelection}`;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            result = `${playerSelection} beats ${computerSelection}, You Win!!!`;
        } else {
            result = `${computerSelection} beats ${playerSelection}, You Lose!!!`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = `${playerSelection} beats ${computerSelection}, You Win!!!`;
        } else {
            result = `${computerSelection} beats ${playerSelection}, You Lose!!!`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            result = `${playerSelection} beats ${computerSelection}, You Win!!!`;
        } else {
            result = `${computerSelection} beats ${playerSelection}, You Lose!!!`;
        }
    }
    return result;
}

function game() {
    
}

