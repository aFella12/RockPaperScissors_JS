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
    playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        result = 'Tie';
    } else if (playerSelectionLower === 'rock') {
        if (computerSelection === 'scissors') {
            result = 'Player Win';
        } else {
            result = 'Computer Win';
        }
    } else if (playerSelectionLower === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Player Win';
        } else {
            result = 'Computer Win';
        }
    } else if (playerSelectionLower === 'scissors') {
        if (computerSelection === 'paper') {
            result = 'Player Win';
        } else {
            result = 'Computer Win';
        }
    }
    return result;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerMove = prompt("Choose Rock, Paper or Scissors.");
        computerMove = computerPlay();
        if (playRound(playerMove, computerMove) == 'Player Win') {
            playerScore = ++playerScore;
        } else if (playRound(playerMove, computerMove) == 'Computer Win') {
            computerScore = ++computerScore;
        }
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore == computerScore) {
        alert(`A tie with both competitors possesing ${playerScore} points.`);
    } else if (playerScore > computerScore) {
        alert(`Congrats!!! You bested the computer by a score of ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        alert(`You somehow lost to a computer spitting out random generators by a score of ${computerScore} to ${playerScore}`)
    } else {
        alert('you broke my code, leave');
    }
}

