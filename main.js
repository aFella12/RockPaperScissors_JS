//the functio getRandomIntInclusive was taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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

console.log(computerPlay());

